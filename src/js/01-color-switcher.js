
const refs = {
    ourBody: document.querySelector('body'),
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')

};

refs.btnStart.addEventListener('click', onShowColor);
refs.btnStop.addEventListener('click', onStopColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timerId = null;

refs.btnStop.setAttribute('disabled', true);

function onShowColor() {
    // refs.btnStop.setAttribute('disabled', false);
    // refs.btnStart.setAttribute('disabled', true);
    refs.btnStop.disabled = false;
    refs.btnStart.disabled = true;

    timerId = setInterval(() => {
        let randomColor = getRandomHexColor()
        refs.ourBody.style.background = randomColor;
    }, 1000);
};

function onStopColor() {
    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;

    clearInterval(timerId);
};

