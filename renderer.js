const countDownStart = () => {
  let hr = parseInt(document.querySelector('hr').value)
  let min = parseInt(document.querySelector('min').value)
  let sec = parseInt(document.querySelector('sec').value)
  setInterval(() => {
    hr = hr < 10 ? "0" + hr : hr
    min = min < 10 ? "0" + min : hr
    sec = sec < 10 ? "0" + sec : sec
  })
}

const countDownEnd = () => {
  const myNotification = new Notification('Time to Stand Up!', {
    body: 'Your 1 hr time hour is due. Time to stand up and take a break :)'
  })
  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
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
  let inputValues = document.querySelectorAll('input')
  for (let inputValue of inputValues) {
    inputValue.addEventListener('change', inputValueCheck)
  }
})