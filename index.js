const hoursElement = document.getElementById("hour");
const MinutesElement = document.getElementById("minutes");
const SecondsElement = document.getElementById("seconds");

function NewTime(){
    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    
    
    hoursElement.textContent = FixTime(hours)
    MinutesElement.textContent = FixTime(minutes)
    SecondsElement.textContent = FixTime(seconds)
}




function FixTime(time)
{
    return time < 10 ? '0' + time: time
}

NewTime()
setInterval(NewTime, 1000)