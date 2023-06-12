// Logic for the real-time clock

setInterval(() =>{
    const date = new Date();
    var curDate = date.toLocaleDateString();
    var currentTime = date.toLocaleTimeString();
    var finalDate = curDate.replace(/\//g, '-');
    // send it to HTML using DOM
    document.getElementById("date").innerHTML = finalDate;
    document.getElementById('time').innerHTML = currentTime;

}, 1000);