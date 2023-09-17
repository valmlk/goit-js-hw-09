const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStart() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    btnStart.disabled = true;
    btnStop.removeAttribute('disabled');
  }, 1000);
}

function onStop() {
  clearInterval(timerId);
  btnStop.disabled = true;
  btnStart.removeAttribute('disabled');
}

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);
