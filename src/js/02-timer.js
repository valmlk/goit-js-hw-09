import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.getElementById('datetime-picker');
const btnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let timerId = null;
btnEl.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < this.config.defaultDate) {
      window.alert('Please choose a date in the future');
    } else {
      btnEl.disabled = false;
    }
  },
};

const flatpick = flatpickr(inputEl, options);

function countdown() {
  const selectedDate = flatpick.selectedDates[0];
  inputEl.disabled = true;
  btnEl.disabled = true;
  timerId = setInterval(() => {
    const startTime = new Date();
    const count = selectedDate - startTime;
    formatDate(convertMs(count));
    if (count < 1000) {
      clearInterval(timerId);
      inputEl.disabled = false;
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const addLeadingZero = value => {
  return String(value).padStart(2, 0);
};

function formatDate(timeObj) {
  daysEl.textContent = addLeadingZero(timeObj.days);
  hoursEl.textContent = addLeadingZero(timeObj.hours);
  minutesEl.textContent = addLeadingZero(timeObj.minutes);
  secondsEl.textContent = addLeadingZero(timeObj.seconds);
}

btnEl.addEventListener('click', countdown);
