let day = prompt("დღე");
document.querySelector(".day").textContent = day;

let hour = prompt("საათი");
document.querySelector(".hour").textContent = hour;

let minute = prompt("წუთი");
document.querySelector(".minute").textContent = minute;

let second = prompt("წამი");
document.querySelector(".second").textContent = second;

let interval = setInterval(() => {
  document.querySelector(".day").textContent = day;
  document.querySelector(".hour").textContent = hour;
  document.querySelector(".minute").textContent = minute;
  document.querySelector(".second").textContent = second;
  // console.log(`Day: ${day} Hour: ${hour} Minute: ${minute}, Second: ${second}`);

  second--;
  if (second < 0) {
    second = 59;
    minute--;

    if (minute < 0) {
      minute = 59;
      hour--;
    }
    if (hour < 0) {
      hour = 23;
      day--;
    }
    if (day < 1) {
      day = 30;
    }
    if (minute < 0 && hour < 0 && day < 1 && second < 0) {
      clearInterval(interval + console.log("dasrulda"));
    }
  }
}, 1000);
