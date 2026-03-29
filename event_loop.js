// const fs = require('fs')

// setTimeout(() => console.log("anything"), 0);

// setImmediate(() => console.log("immidiate"));


// fs.readFile('sample.txt', 'utf-8', () => {
//     console.log('IO Polling Finished');

//     setTimeout(() => console.log("Hello From Timer 2"), 0);
//     setTimeout(() => console.log("Hello From Timer 3"), 5 * 100);
// });

// console.log("Top level code");

function x() {
    var i = 1;
    setInterval(() => {
        console.log(i);
        i++;
    }, 1000);

}

x();