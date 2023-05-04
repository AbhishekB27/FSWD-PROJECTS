console.log("COUNTDOWN");
var cdDay = document.getElementById("day");
var cdHour = document.getElementById("hour");
var cdMinute = document.getElementById("minute");
var cdSecond = document.getElementById("second");
var countdown = document.getElementById("countdown");
var spinner = document.getElementById("spinner");
var setting = document.getElementById("setting");
var dateInput = document.getElementById("dateInput");
var dateContainer = document.getElementById("dateContainer");
const enterButton = document.getElementById("enterButton");
let endingDate = "";

let existDate = new Date(JSON.parse(localStorage.getItem("date")));
console.log(new Date(JSON.parse(localStorage.getItem("date"))).toLocaleDateString())
if (existDate) {
  console.log("Date already exists");
  dateContainer.style.display = "none";
  endingDate = existDate.toLocaleDateString();
  setCountDown();
  dateInput.value = `${existDate.getFullYear()}-${existDate.getMonth()+1}-0${existDate.getDate()}`
} else {
  console.log("Date not exists");
}
console.log(dateInput);
setting.addEventListener("click", () => {
  dateContainer.style.display = "flex";
});
// console.log("Good: " + new Date(`2023-11-20`).getFullYear())

enterButton.addEventListener("click", () => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (
    dateInput.value.match(dateRegex) &&
    new Date(`${dateInput.value}`).getTime() > new Date().getTime()
  ) {
    console.log("Good: " + new Date(`${dateInput.value}`));
    endingDate = `${new Date(`${dateInput.value}`).toLocaleDateString()}`;
    localStorage.setItem(
      "date",
      JSON.stringify(new Date(`${dateInput.value}`).toLocaleDateString())
    );
    dateContainer.style.display = "none";
    setCountDown();
  } else {
    alert("Enter Again");
  }
});

console.log(endingDate);
console.log(new Date().getMonth())
function remainingTime() {
  const time1 = new Date(`${endingDate}`).getTime();
  const time2 = Date.parse(new Date());
  const total = time1 - time2;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}
function setCountDown() {
  const timeInter = setInterval(() => {
    const time = remainingTime();
    cdDay.innerHTML = `${time.days}`;
    cdHour.innerHTML = `${time.hours}`;
    cdMinute.innerHTML = `${time.minutes}`;
    cdSecond.innerHTML = `${time.seconds}`;
    if (time.total <= 0) {
      clearInterval(timeInter);
      // alert("Time Over")
    }
  }, 1000);
}