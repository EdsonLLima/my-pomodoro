const action = document.querySelector('#action')
const stop_session = document.querySelector('#stop')
const sessions = document.querySelector('#sessions')
const seconds = null

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
    } else if (stop_session.value == 0) {
        document.querySelector('#erro_stop').innerHTML = "adicione a  pausa"
        stop_session.focus()
    } else if (sessions.value == 0) {
        document.querySelector('#erro_sessions').innerHTML = "adicione as sessões  "
        sessions.focus()
    } else {
        lofi.play()
        pause.style.setProperty('display', 'block', 'important')

        localStorage.setItem('action', String(action.value))
        localStorage.setItem('stop', String(stop_session.value))
        localStorage.setItem('sessions', String(sessions.value))

        document.getElementById('config').style.setProperty('display', 'none', 'important')
        document.getElementById('timer').style.setProperty('display', 'block', 'important')

    }
}

const momentOfAction = () => {
    const sessions_value = localStorage.getItem('sessions')
    const title_sessions = document.querySelector('#title_sessions')

    if (sessions_value !== '1') {
        title_sessions.innerHTML = `${sessions_value} sessões restantes`

    } else {
        title_sessions.innerHTML = `${sessions_value} sessão restante`
    }

    const title = document.querySelector('title')
    title.innerHTML = "AÇÃO"
    title.style.fontSize = '25pt'
    title.style.fontWeight = 'bold'
    title.style.setProperty('color', '#28a745', important)

    let minute = Number(localStorage.getItem('action'))

    minute = minute - 1
    seconds = 59

    document.querySelector('#minutes_ok').innerHTML = minute
    document.querySelector('#seconds_ok').innerHTML = seconds

}