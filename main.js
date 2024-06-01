const hourHand = document.getElementById("hrs");
const minuteHand = document.getElementById("mins");
const secondHand = document.getElementById("secs");
const amOrPm = document.getElementById("amOrPm");

setInterval(() => {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  amOrPm.innerText = hours < 12 ? "AM" : "PM";
  hours = hours <= 12 ? hours : hours - 12;

  hourHand.innerText = hours < 10 ? "0" + hours : hours;
  minuteHand.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondHand.innerText = seconds < 10 ? "0" + seconds : seconds;
}, 1000);
