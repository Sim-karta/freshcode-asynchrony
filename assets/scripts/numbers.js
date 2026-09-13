/*
function printNumbers(from, to, interval) {
    let i = from;
    console.log(i++);

    const timer = setInterval(() => {
        if (i === to) {
            clearInterval(timer);
        }

        console.log(i++);
    }, interval);
}

printNumbers(5, 10, 1000);
*/

function printNumbers(from, to, interval) {
    console.log(from++);
    setTimeout(() => {
        if (from <= to) {
            printNumbers(from, to, interval);
        }
    }, interval);
}

printNumbers(5, 10, 1000);
