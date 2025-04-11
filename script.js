const day = moment().format('DD-');
document.querySelector('.date .day').textContent = day;

const month = moment().format('MM-');
document.querySelector('.date span').textContent = month;

const year = moment().format('YYYY');
document.querySelector('.date strong').textContent = year;

function updateClock() {
    const hour = moment().format('hh');
    const min = moment().format('mm');
    const sec = moment().format('ss');

    document.querySelector('.box1 span').textContent = hour;
    document.querySelector('.box2 span').textContent = min;
    document.querySelector('.box3 span').textContent = sec;
}

setInterval(updateClock, 1000);

updateClock();


let alarm = null, triggered = false;
const sound = new Audio("alarm.mp3");

setInterval(() => {
  const now = moment().format("HH:mm");
  document.querySelector('.box1 span').textContent = moment().format('hh');
  document.querySelector('.box2 span').textContent = moment().format('mm');
  document.querySelector('.box3 span').textContent = moment().format('ss');
  if (alarm === now && !triggered) {
    sound.play();
    triggered = true; 
  }
}, 1000);

function setAlarm() {
  alarm = document.getElementById("alarmtime").value;
  triggered = false;
  document.getElementById("setBtn").disabled = true;
  document.getElementById("stopBtn").disabled = false;
}

function stopAlarm() {
  alarm = null;
  triggered = false;
  sound.pause(); sound.currentTime = 0;
  document.getElementById("setBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("alarmtime").value = "";
}