const action = document.querySelector('#action')
const stop = document.querySelector('#stop')
const sessions = document.querySelector('#sessions')
const seconds = 0

const bell = new Audio("../src/audio/bell.mp3")
const back = new Audio("../src/audio/volta.mp3")
const finished = new Audio("../src/audio/final.mp3")

const lofi = document.querySelector('#lofi')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')

const start = () => {
    if (action.value == 0) {
        document.querySelector('#erro_action').innerHTML = "adicione os minutos"
        action.focus()
    } else if (stop.value == 0) {
        document.querySelector('#erro_stop').innerHTML = "adicione a  pausa"
        stop.focus()
    } else if (sessions.value == 0) {
        document.querySelector('#erro_sessions').innerHTML = "adicione as sessões  "
        sessions.focus()
    } else {
        lofi.play()
        pause.style.setProperty('display', 'block', 'important')

    }

}