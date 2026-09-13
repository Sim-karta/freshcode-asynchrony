const timerElement = document.querySelector(".timer");
const timerIntervalBtnElement = timerElement.querySelector(".timer-interval");
const timerTimeoutBtnElement = timerElement.querySelector(".timer-timeout");

function printNumbersInterval(from, to, interval) {
    let i = from;
    console.log(i++);

    const timer = setInterval(() => {
        if (i === to) {
            clearInterval(timer);
        }

        console.log(i++);
    }, interval);
}

function printNumbersTimeout(from, to, interval) {
    console.log(from++);
    setTimeout(() => {
        if (from <= to) {
            printNumbersTimeout(from, to, interval);
        }
    }, interval);
}

timerIntervalBtnElement.addEventListener("click", () => {
    printNumbersInterval(5, 10, 1000);
});

timerTimeoutBtnElement.addEventListener("click", () => {
    printNumbersTimeout(5, 10, 1000);
});
