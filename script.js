const timerOne = performance.now();
myFunc(1000000000); // call whatever function you want to time here
const timerTwo = performance.now();

// log results in the console
console.log((timerTwo - timerOne) / 1000);
