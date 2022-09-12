import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    // пока не знаю зачем так дохрена
    btnStart: document.querySelector('[data-start]'),
    clockFace: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.addEventListener('click', onCounterStart);

refs.btnStart.disabled = true;

let intervalId = null;
let ourTimeCounter = 0;

// клик и старт таймера
function onCounterStart() {

    refs.btnStart.disabled = true;
    refs.clockFace.disabled = true;
    // время старта
    // const startTime = Date.now()

    // запускаем интервал
    intervalId = setInterval(() => {
        // текущее время на момент вызова функции
        const currentTime = Date.now();

        // счет назад
        const deltaTime = selectDates - currentTime;

        // обратный отсчет в мат.функцию даты\времени
        ourTimeCounter = convertMs(deltaTime);

        const { days, hours, minutes, seconds } = ourTimeCounter;
        let sumDateValue = Number(days + hours + minutes + seconds);
        if (sumDateValue === 0) {
            clearInterval(intervalId);
        }

        // ЗАРАБОТАЛО ХОТЬ :)))
        updateClockFace(ourTimeCounter)
        // console.log(ourTimeCounter)
        console.log(sumDateValue)
    }, 1000);


};


// обновляет значения в интерфейсе
function updateClockFace({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;

};


// куда это после опшина? - в с четчик ёпта)
let selectDates = 0;
// выбор пользователем даты\времени без прошлых дат\времени

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        selectDates = selectedDates[0].getTime();

        if (selectDates >= options.defaultDate) {
            refs.btnStart.disabled = false;
        }
        else {
            window.alert("Please choose a date in the future");
            refs.btnStart.disabled = true;
        }
    },
};
flatpickr('#datetime-picker', options)


// добавляю двухзначные числа с нулем 
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}


// функция даты\времени - для подсчета значений - где ms - разница между конечной и текущей датой в миллисекундах.
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



