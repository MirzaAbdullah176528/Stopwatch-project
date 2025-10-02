let b1 = document.querySelector(".b1")
let b2 = document.querySelector(".b2")
let b3 = document.querySelector(".b3")
let b4 = document.querySelector(".b4")

let second = document.querySelector(".sec")
let mint = document.querySelector(".mint")
let a = document.querySelector(".mili")
let leapDiv = document.querySelector(".leap")
let body = document.querySelector(".body")

let secInterval = null;

let timeLeft = 0;
let startTime;

function startTimer() {

    if (secInterval)
        return;

    startTime = (new Date()).getTime() - timeLeft;

    secInterval = setInterval(() => {

        const duration = (new Date()).getTime() - startTime;
        timeLeft = duration;

        const totalSeconds = Math.floor(duration / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);

        const displayMili = duration % 1000;
        const displaySeconds = totalSeconds % 60;
        const displayMinutes = totalMinutes % 60;

        second.textContent = displaySeconds < 10 ? `0${displaySeconds}` : `${displaySeconds}`;

        a.textContent = displayMili.toString().padStart(3, '0');


        mint.textContent = displayMinutes < 10 ? `0${displayMinutes}:` : `${displayMinutes}:`;

        return duration
    }, 10)
};

function Stop_timer() {
    clearInterval(secInterval)
    secInterval = null;
}

function Reset() {
    clearInterval(secInterval)
    secInterval = null;
    timeLeft = 0;


    second.textContent = `00`
    a.textContent = `000`
    mint.textContent = `00:`


    leapDiv.innerHTML=`<h1>LAPS</h1>`
    leapDiv.style.display="none"
    };

function leap_value() {
    let duration = timeLeft
    const totalSeconds = Math.floor(duration / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);

    const displayMili = duration % 1000;
    const displaySeconds = totalSeconds % 60;
    const displayMinutes = totalMinutes % 60;

    leapDiv.style.display = "flex";
    leapDiv.innerHTML += `
        <p style="
        display:flex;
        align-items:center;
        justify-content:center;
        margin: 0.5rem;
        background-color: #1B3C53;
        padding:0.3rem;
        border-radius:0.5rem;
        width:25vw;">
        Mints:${displayMinutes} -- Seconds:${displaySeconds} -- MiliSec:${displayMili}
        </p>`;

    leapDiv.scrollTop = leapDiv.scrollHeight;
}



b1.addEventListener("click", () => startTimer())
b2.addEventListener("click", Stop_timer)
b3.addEventListener("click", Reset)
b4.addEventListener("click",leap_value)



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

addEventListener("keydown",(e) =>{
    if(e.code === "Enter"){
        document.body.style.animation="main 1s ease-in-out forwards;"
        document.body.style.justifyContent = "flex-start;"
        leap_value()
        e.preventDefault()
    }
})