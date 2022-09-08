 declareBlock: {
 var x, y
 }
 
 forLoop1:
 for (x = 0; x < 3; x++){
 forLoop2:
 for (y = 0; y < 3; y++) {
 if (x === 1 && y === 1){
 continue forLoop1
 }
 console.log('x = ' + x + ', y = ' + y)
 }
 }
 
 loopBlock4: {
 console.log('Hey There ! My name is Sam')
 break loopBlock4
 console.log('I love singing')
 }

  (function test() {
 function fn() {
 arguments.callee.count = arguments.callee.count || 0;
 return arguments.callee.count++;
 }
 
 console.log(
 fn(),
 fn(),
 fn()
 );
 })();

  let randomValue = { name: "CutShort" }
 randomValue = 23
 console.log(typeof randomValue === "string")
 //console.log(typeof randomValue)
 if (!typeof randomValue === "string") {
 console.log("It's not a string!")
 } else {
 console.log("It's a string!")
 }

  const a = {};
 const b = { key: 'b' };
 const c = { key: 'c' };
 
 a[b] = 123;
 a[c] = 456;
 
 console.log(a[b]);