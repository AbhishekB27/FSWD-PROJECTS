console.log("COUNTDOWN")
var cdDay= document.getElementById('day');
var cdHour= document.getElementById('hour');
var cdMinute= document.getElementById('minute');
var cdSecond= document.getElementById('second');
var countdown = document.getElementById('countdown');
var spinner = document.getElementById('spinner');



setInterval(() => {
    const time1 = new Date("jun/12/2022 12:00:00").getTime();
    const time2 = new Date().getTime();
    const difference = time1- time2;
    console.log(difference)
    const day= Math.floor( difference / (1000 * 60 * 60 * 24) );
    const hours =Math.floor( difference % (1000 * 60 * 60 * 24)/(1000* 60 * 60) ) // ms in 1 hr = 1000*60*60
    const min = Math.ceil( difference % (1000 * 60 * 60 )/(1000* 60))// ms in1 min = 1000*60
    const sec = Math.ceil( difference % (1000 * 60 )/(1000) )// ms in 1sec = 1000
    console.log("Days: " + day)
    console.log("Hours: "+hours)
    console.log("Minutes: "+min)
    console.log("Seconds: "+sec)
    // countdown.innerHTML =`${day} : ${hours} : ${min} : ${sec}`
    setTime(day,hours,min,sec)
},1000);

const setTime = (day,hours,min,sec)=>{
        day < 10 ? (cdDay.innerHTML=`0${day}`) : (cdDay.innerHTML=`${day}`);
        hours < 10 ? (cdHour.innerHTML=`0${hours}`) : (cdHour.innerHTML=`${hours}`);
        min < 10 ? (cdMinute.innerHTML=`0${min}`) : (cdMinute.innerHTML=`${min}`);
        sec < 10 ? (cdSecond.innerHTML=`0${sec}`) : (cdSecond.innerHTML=`${sec}`);


}


