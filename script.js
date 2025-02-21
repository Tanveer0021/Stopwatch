const display = document.getElementById("display");
const title = document.querySelector("title");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = `00:00:00`;
    title.textContent = `Stopwatch`;
}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    milliseconds = String(milliseconds).padStart(2,'0');

    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
    title.textContent = `${minutes}:${seconds} - Stopwatch`;
}