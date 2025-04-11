setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let hourElement = document.querySelector(".hour");
  hourElement.innerHTML = hour;

  let minute = date.getMinutes();
  let minElement = document.querySelector(".min");
  minElement.innerHTML = minute;

  let second = date.getSeconds();
  let secElement = document.querySelector(".sec");
  secElement.innerHTML = second;

  if (second < 10) {
    secElement.innerHTML = `0${second}`;
  }
  if (minute < 10) {
    minElement.innerHTML = `0${minute}`;
  }
  if (hour < 10) {
    hourElement.innerHTML = `0${hour}`;
  }
}, 1000);
