
let counter = document.getElementById("counter");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let result = document.getElementById("result");
let targetSpan = document.getElementById("target");

let value = 0;
let interval;
let target = 0;

function generateTarget() {
    target = (Math.random() * 100).toFixed(2);
    targetSpan.innerText = target;
}

startBtn.onclick = () => {
    generateTarget();
    result.innerText = "";
    value = 0;
    counter.innerText = "0.00";
    startBtn.disabled = true;
    stopBtn.disabled = false;

    interval = setInterval(() => {
        value += 0.13 + Math.random() * 0.05;
        if (value >= 100) value = 100;
        counter.innerText = value.toFixed(2);
        if (value >= 100) {
            clearInterval(interval);
            stopBtn.disabled = true;
            startBtn.disabled = false;
            result.innerText = "فاتك القطار! 😅";
        }
    }, 30);
};

stopBtn.onclick = () => {
    clearInterval(interval);
    stopBtn.disabled = true;
    startBtn.disabled = false;
    let diff = Math.abs(value - target).toFixed(2);
    if (diff <= 0.2) {
        result.innerText = `🎉 ممتاز! الفرق فقط ${diff}`;
    } else {
        result.innerText = `🤏 قريب لكن الفرق ${diff}`;
    }
};
