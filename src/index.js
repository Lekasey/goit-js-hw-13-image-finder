const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-action=start]'),
    btnStop: document.querySelector('[data-action=stop]')
};

let intervalId = null;

refs.btnStart.addEventListener('click', colorChange)
refs.btnStop.addEventListener('click', stopColorChange)

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
  
function colorChange() {
    intervalId = setInterval(() => {
        console.log(intervalId);
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length)],
        refs.btnStart.setAttribute('disabled', true)
        console.log(refs.body.style.backgroundColor);
    },1000) 
}

function stopColorChange() {
    clearInterval(intervalId)
    // intervalId = null
    refs.btnStart.removeAttribute('disabled')
}

