var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("minute");
var secHeading = document.getElementById("second");
var msecHeading = document.getElementById("msecond");
var hour = 0;
var min = 0;
var sec = 0;
var msecond = 0;
var interval;

function stopwatch() {
  msecond++;
  msecHeading.innerHTML = msecond;
  if (msecond >= 100) {
    sec++;
    secHeading.innerHTML = sec;
    msecond = 0;
  } else if (sec >= 60) {
    min++;
    minHeading.innerHTML = min;
    sec = 0;
  } else if (min >= 60) {
    hour++;
    hourHeading.innerHTML = hour;
    min = 0;
  }
}

function start() {
    document.getElementById("startbtn").disabled = true;
    interval = setInterval(stopwatch, 10);
    btn.disabled = true;

}

function stop() {
    var btn = document.getElementById("startbtn");
    clearInterval(interval);
    btn.disabled = false;

}

function reset() {
  hour = 0;
  min = 0;
  sec = 0;
  msecond = 0;
  msecHeading.innerHTML = msecond;
  secHeading.innerHTML = sec;
  minHeading.innerHTML = min;
  hourHeading.innerHTML = hour;
  stop();
}

var object = {
  start: start,
  stop: stop,
  reset: reset
};
