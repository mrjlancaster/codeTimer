const timerOne = performance.now();
myFunc(); // call whatever function you want to time here
const timerTwo = performance.now();

// save results in variable
const result = (timerTwo - timerOne) / 1000;

// log results in the console if you wish
console.log(result);
