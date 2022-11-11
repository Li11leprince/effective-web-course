const minutesInput = document.querySelector('.minutes-input')
const secondsInput = document.querySelector('.seconds-input')

const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')

const startButton = document.querySelector('.start-button')
const pauseButton = document.querySelector('.pause-button')
const resetButton = document.querySelector('.reset-button')

const oneMinButton = document.querySelector('.one-min')
const twoMinButton = document.querySelector('.two-min')
const tenMinButton = document.querySelector('.ten-min')

const background = document.querySelector('body')

let isGoing = false
let isEnded = false

var audio = new Audio('/sounds/chewbacca_swf.mp3');
audio.loop = true

let minutes = 0,
    seconds = 0,
    idInterval

function takeInput() {
    if (minutesInput.value != "") {
        minutes = minutesInput.value
    }

    if (secondsInput.value != "") {
        seconds = secondsInput.value
    } 
    minutesInput.value = ""
    secondsInput.value = ""
}

function setMinutes() {
    if (minutes <= 9) {
        minutesElement.innerText = "0" + minutes
    } else { 
        minutesElement.innerText = minutes 
    }  
}

function setSeconds() {
    if (seconds <= 9 && seconds >= 0) {
        secondsElement.innerText = "0" + seconds
    }
    else if (seconds > 9) {
        secondsElement.innerText = seconds
    }
}

function setTime() {
    setMinutes()
    setSeconds()
}

function changeTime(changeMinutes, changeSeconds) {
    minutes = changeMinutes
    seconds = changeSeconds
    localStorage.setItem('minutes', minutes)
    localStorage.setItem('seconds', seconds)
    setTime()
}

function startTimer() {
    if (minutes > 0 || seconds > 0) {
        minutesInput.disabled = true
        secondsInput.disabled = true
    }
    setTime()
    seconds--
    setSeconds()
    if (seconds < 0 && minutes > 0) {
        seconds = 59;
        minutes--
        setTime()
    } else if (minutes == 0 && seconds == 0) {
        setSeconds()
        clearInterval(idInterval)
        background.style.backgroundColor = "#cc3300"
        audio.play()
        isEnded = true
        localStorage.setItem('isEnded', isEnded)
    }
    localStorage.setItem('minutes', minutes)
    localStorage.setItem('seconds', seconds)
}

startButton.addEventListener('click', () => {
    isGoing = true
    localStorage.setItem('isGoing', isGoing)
    takeInput()
    clearInterval(idInterval)
    setTime()
    idInterval = setInterval(startTimer, 1000)
})

pauseButton.addEventListener('click', () => {
    isGoing = false
    localStorage.setItem('isGoing', isGoing)
    clearInterval(idInterval)
})

resetButton.addEventListener('click', () => {
    isGoing = false
    isEnded = false
    localStorage.setItem('isGoing', isGoing)
    localStorage.setItem('isEnded', isEnded)
    clearInterval(idInterval)
    changeTime(0, 0)
    minutesInput.disabled = false
    secondsInput.disabled = false
    background.style.backgroundColor = "#0a0c20"
    audio.pause()
    audio.currentTime = 0
})

oneMinButton.addEventListener('click', () => {
    changeTime(1, 0)
})

twoMinButton.addEventListener('click', () => {
    changeTime(2, 0)
})

tenMinButton.addEventListener('click', () => {
    changeTime(10, 0)
})

function takeSavedValues() {
    if (localStorage.getItem('minutes') != null) {
        minutes = localStorage.getItem('minutes')
    }
    if (localStorage.getItem('seconds') != null) {
        seconds = localStorage.getItem('seconds')
    }
    if (localStorage.getItem('isGoing') != null) {
        isGoing = localStorage.getItem('isGoing')
    }
    if (localStorage.getItem('isEnded') != null) {
        isEnded = localStorage.getItem('isEnded')
    }
    setTime()
    if (isGoing == "true") {
        idInterval = setInterval(startTimer, 1000)
    }
    if (isEnded == "true") {
        background.style.backgroundColor = "#cc3300"
    }
}

takeSavedValues()

