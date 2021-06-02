// Global variable for the timer
let h, m, s // current 
let hr, min, sec // initial
let interval

const countDownStart = () => {
  document.querySelector('#count-down-start').classList.toggle('hidden')
  document.querySelector('#count-down-pause').classList.toggle('hidden')
  document.querySelector('#hr').disabled = true
  document.querySelector('#min').disabled = true
  document.querySelector('#sec').disabled = true
  hr = h = parseInt(document.querySelector('#hr').value)
  min = m = parseInt(document.querySelector('#min').value)
  sec = s = parseInt(document.querySelector('#sec').value)
  interval = setInterval(countDownInterval, 1000)
  console.log('countDownStart')
}

const countDownInterval = () => {
  if (h == 0 && m == 0 && s == 0) {
    countDownEnd()
  }
  else {
    s--
    if (s == -1) {
      s = 59
      m--
    }
    if (m == -1) {
      m = 59
      h--
    }
    document.querySelector('#hr').value = h < 10 ? "0" + h : h
    document.querySelector('#min').value = m < 10 ? "0" + m : m
    document.querySelector('#sec').value = s < 10 ? "0" + s : s
  }
  console.log(`countDownInterval: ${h} h ${m} m ${s} s`)
}

const countDownPause = () => {
  clearInterval(interval)
  document.querySelector('#count-down-pause').classList.toggle('hidden')
  document.querySelector('#count-down-resume').classList.toggle('hidden')
  document.querySelector('#count-down-reset').classList.toggle('hidden')
  console.log('countDownPause')
}

const countDownResume = () => {
  interval = setInterval(countDownInterval, 1000)
  document.querySelector('#count-down-pause').classList.toggle('hidden')
  document.querySelector('#count-down-resume').classList.toggle('hidden')
  document.querySelector('#count-down-reset').classList.toggle('hidden')
  console.log('countDownResume')
}

const countDownReset = () => {
  document.querySelector('#count-down-start').classList.toggle('hidden')
  document.querySelector('#count-down-resume').classList.toggle('hidden')
  document.querySelector('#count-down-reset').classList.toggle('hidden')
  document.querySelector('#hr').disabled = false
  document.querySelector('#min').disabled = false
  document.querySelector('#sec').disabled = false
  console.log('countDownReset')
}

const countDownEnd = () => {
  clearInterval(interval)
  const countDownEndNotification = new Notification('Time to Stand Up!', {
    body: `Your ${hr} hours, ${min} minutes and ${sec} seconds timer is due. Time to stand up and take a break :) \nClick me to restart the timer.`
  })
  countDownEndNotification.onclick = () => {
    console.log('countDownEndNotification.onclick')
  }
  document.querySelector('#count-down-start').classList.toggle('hidden')
  document.querySelector('#count-down-pause').classList.toggle('hidden')
  document.querySelector('#hr').disabled = false
  document.querySelector('#min').disabled = false
  document.querySelector('#sec').disabled = false
  console.log('countDownEnd')
}

const inputValueCheck = () => {
  let inputValues = document.querySelectorAll('input')
  for (let inputValue of inputValues) {
    // add leading zero
    if (inputValue.value.length == 0) {
      inputValue.value = "00"
    }
    else if (inputValue.value.length < 2) {
      inputValue.value = "0" + inputValue.value
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  console.log("hello from renderer!")
  const inputValues = document.querySelectorAll('input')
  for (let inputValue of inputValues) {
    inputValue.addEventListener('change', inputValueCheck)
  }
  document.querySelector('#count-down-start').addEventListener('click', countDownStart)
  document.querySelector('#count-down-pause').addEventListener('click', countDownPause)
  document.querySelector('#count-down-resume').addEventListener('click', countDownResume)
  document.querySelector('#count-down-reset').addEventListener('click', countDownReset)
  document.querySelector('#user-agent').textContent = navigator.userAgent
  document.querySelector('footer').addEventListener('click', () => {document.querySelector('#user-agent').classList.toggle('hidden')})
})