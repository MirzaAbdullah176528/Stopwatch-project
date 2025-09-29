let b1 = document.querySelector(".b1")
let b2 = document.querySelector(".b2")
let b3 = document.querySelector(".b3")

let second = document.querySelector(".sec")
let mint = document.querySelector(".mint")
let a = document.querySelector(".mili")

let secInterval = null;

let TimeElapsed = 0; 
let startTime; 

function startTimer() {

    if (secInterval)
        return;

    startTime = (new Date()).getTime() - TimeElapsed;

    secInterval = setInterval(() => {

        const duration = (new Date()).getTime() - startTime;
        TimeElapsed = duration; 

        const totalSeconds = Math.floor(duration / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);

        const displayMili = duration % 1000;
        const displaySeconds = totalSeconds % 60;
        const displayMinutes = totalMinutes % 60; 

        second.textContent = displaySeconds < 10 ? `0${displaySeconds}` : `${displaySeconds}`;

        a.textContent = displayMili.toString().padStart(3, '0');
        

        mint.textContent = displayMinutes < 10 ? `0${displayMinutes}:` : `${displayMinutes}:`;

        }, 10)

};

function Stop_timer() {
    clearInterval(secInterval)
    secInterval = null;
}

function Reset() {
    clearInterval(secInterval)
    secInterval = null; 
    TimeElapsed = 0;    


    second.textContent = `00`
    a.textContent = `000`
    mint.textContent = `00:`
};


b1.addEventListener("click", () => startTimer())
b2.addEventListener("click", Stop_timer)
b3.addEventListener("click", Reset)

addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        if (!secInterval) {
            startTimer()
            e.preventDefault()
        }
        else {
            Stop_timer()
            e.preventDefault()
        }
    }
});
addEventListener('keydown', (e) => {
    if (e.code === "Backspace") {
        Reset()
        e.preventDefault()
    }
})