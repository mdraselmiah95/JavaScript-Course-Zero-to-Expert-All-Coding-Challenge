// Javascript interpreter vs compiler 💥

/*

JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

*/

function a() {
  console.log("I am function a");
}

function b() {
  console.log("I am function b");
}

a();
b();

// Just-In-Time (JIT) use modern browser
