document.addEventListener('DOMContentLoaded', () => {
    const daysNum = document.querySelector('#days-num'),
          hoursNum = document.querySelector('#hours-num'),
          minutesNum = document.querySelector('#minutes-num'),
          secondsNum = document.querySelector('#seconds-num'),
          daysWord = document.querySelector('#days-word'),
          hoursWord = document.querySelector('#hours-word'),
          minutesWord = document.querySelector('#minutes-word'),
          secondsWord = document.querySelector('#seconds-word'),
          second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let timeLeft;

    // Дата, до которой будет вестись обратный отсчет
    let countdownDate = new Date('Apr 18, 2022 0:00:00').getTime();

    const updateTimer = function() {
        let currDate = new Date().getTime(),
            days,
            hours,
            minutes,
            seconds;

        timeLeft = countdownDate - currDate;

        if (timeLeft > 0) {
            days = Math.floor(timeLeft / day);
        
            hours = Math.floor((timeLeft % day) / hour);
            if (hours < 10) hours = '0' + hours;

            minutes = Math.floor((timeLeft % hour) / minute);
            if (minutes < 10) minutes = '0' + minutes;

            seconds = Math.floor((timeLeft % minute) / second);
            if (seconds < 10) seconds = '0' + seconds;
            if (seconds == 60) seconds = 59;
        } else {
            days = 0;

            hours = '00';

            minutes = '00';

            seconds = '00';
        }

        daysNum.textContent = days;
        if ([1, 21].indexOf(days) !== -1) {
            daysWord.textContent = 'День';
        } else if ([2, 3, 4, 22, 23, 24].indexOf(days) !== -1) {
            daysWord.textContent = 'Дня';
        } else {
            daysWord.textContent = 'Дней';
        }

        hoursNum.textContent = hours;
        if (['01', 21].indexOf(hours) !== -1) {
            hoursWord.textContent = 'Час';
        } else if (['02', '03', '04', 22, 23, 24].indexOf(hours) !== -1) {
            hoursWord.textContent = 'Часа';
        } else {
            hoursWord.textContent = 'Часов';
        }

        minutesNum.textContent = minutes;
        if (['01', 21, 31, 41, 51].indexOf(minutes) !== -1) {
            minutesWord.textContent = 'Минута';
        } else if (['02', '03', '04', 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].indexOf(minutes) !== -1) {
            minutesWord.textContent = 'Минуты';
        } else {
            minutesWord.textContent = 'Минут';
        }

        secondsNum.textContent = seconds;
        if (['01', 21, 31, 41, 51].indexOf(seconds) !== -1) {
            secondsWord.textContent = 'Секунда';
        } else if(['02', '03', '04', 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].indexOf(seconds) !== -1) {
            secondsWord.textContent = 'Секунды';
        } else {
            secondsWord.textContent = 'Секунд';
        }

        return timeLeft;
    };

    if (countdownDate && countdownDate !== 0) {
        const updateInterval = setInterval(updateTimer, 1000);
    }

    // Как текущая дата будет равна или больше указанной для обратного отсчета, останавливаем интервал
    if (timeLeft <= 0) {
        clearInterval(updateInterval);
    }  
})
