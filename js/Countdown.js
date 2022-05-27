console.log("COUNTDOWN")
const time1 = new Date("jul/3/2022").getTime();
const time2 = new Date().getTime();
const difference = time1- time2;
console.log(difference)
const day= difference / (1000 * 60 * 60 * 24);
const hours = difference % (1000 * 60 * 60 * 24)/(1000* 60 * 60) //how many ms in 1 hr
const min = difference % (1000 * 60 * 60 )/(1000* 60)
const sec = difference % (1000 * 60 )/(1000)
console.log("Days: " + day)
console.log("Hours: "+hours)
console.log("Minutes: "+min)
console.log("Seconds: "+sec)

