// Promise API in Javascript 🎢

const delay = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

delay(2).then(() => console.log("2 Second Delay 🦌"));
delay(1).then(() => console.log("1 Second Delay 🦌"));
delay(3).then(() => console.log("3 Second Delay 🦌"));
delay(2).then(() => console.log("2 Second Delay 🦌"));
delay(5).then(() => console.log("5 Second Delay 🦌"));
