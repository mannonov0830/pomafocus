let timeDisplay = document.getElementById("time")
let startBtn = document.querySelector(".start")
let body = document.body
let modes = document.querySelectorAll(".pomaText h4")
let cartPomo = document.querySelector(".cartPomo") 

let timer = null
let isRunning = false


let settings = {
    pomodoro: {
        time: 50 * 60,
        body: "#af4949",
        cart: "#b75c5c"
    },
    short: {
        time: 25 * 60,
        body: "#297479",
        cart: "#3f8287"
    },
    long: {
        time: 15 * 60,
        body: "#2f6a95",
        cart: "#4479a0"
    }
}

let currentMode = "pomodoro"
let seconds = settings[currentMode].time


function formatTime(sec) {
    let min = Math.floor(sec / 60)
    let s = sec % 60
    return `${String(min).padStart(2, "0")} : ${String(s).padStart(2, "0")}`
}

function updateUI() {
    timeDisplay.textContent = formatTime(seconds)

    let theme = settings[currentMode]

    body.style.backgroundColor = theme.body
    document.querySelector(".navbar").style.backgroundColor = theme.body
    cartPomo.style.backgroundColor = theme.cart
}
function startTimer() {
    timer = setInterval(() => {
        if (seconds > 0) {
            seconds--
            updateUI()
        } else {
            clearInterval(timer)
            isRunning = false
            startBtn.textContent = "Start"
        }
    }, 1000)
}


startBtn.addEventListener("click", () => {
    if (!isRunning) {
        startTimer()
        startBtn.textContent = "Pause"
        isRunning = true
    } else {
        clearInterval(timer)
        startBtn.textContent = "Start"
        isRunning = false
    }
})


modes.forEach(btn => {
    btn.addEventListener("click", () => {
        modes.forEach(b => b.classList.remove("active"))
        btn.classList.add("active")

        clearInterval(timer)
        isRunning = false
        startBtn.textContent = "Start"

        if (btn.textContent.includes("Pomodora")) {
            currentMode = "pomodoro"
        } else if (btn.textContent.includes("Short")) {
            currentMode = "short"
        } else {
            currentMode = "long"
        }

        seconds = settings[currentMode].time
        updateUI()
    })
})

updateUI()