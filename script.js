var timerId = null;

function makeBubble() {
    var clutter = '';
    for (var i = 1; i <= 85; i++) {
        var scr = Math.floor(Math.random() * 10)
        clutter += `<div class='bubble'>${scr}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

var score = 0;

function runTimer(timer = 59) {
    if (timerId) { // clear the previous timer if it exists
        clearInterval(timerId);
    }
    timerId = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        } else {
            clearInterval(timerId);
            document.querySelector("#pbtm").innerHTML = `<h1 id = finalScore>${score + "🔥"}<br>Bas Itna Hi Kr Paaye!<br> Firse Koshish Kro </h1>`;
        }
    }, 1000);
}

var hitnum = 0;
function getNewHit() {
    hitnum = Math.floor(Math.random() * 10)
    document.querySelector('#hitval').textContent = hitnum;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickedNumber = Number(details.target.textContent);
    if (hitnum === clickedNumber) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

function restartButton() {
    score = 0;
    timer = 59;
    document.querySelector("#scoreval").textContent = 0;
    document.querySelector("#timervalue").textContent = 59;
    runTimer(); // this will clear the previous timer and start a new one
    getNewHit();
    makeBubble();
}

getNewHit();
runTimer();
makeBubble();