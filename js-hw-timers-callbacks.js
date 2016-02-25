// 1. Function expression:
// A function that uses the 'var' keyword. Due to the use of the 'var' keyword and the associated hoisting,
// calling a fuction exspression must happen after the function expression has been written, otherwise it will return a
// TypeError.  

// 2. Function declaration:
// Does not use the 'var' keyword, therefore no associated hoisting, therefore can be called at anytime.

// 3. Asynchronous code:
// Code that is not executed in order, or from a top-down perspective. JS uses the stack, the heap, and the queue to accomplish this.

// 4. Higher Order Function:
// Are functions that either return a function or accepts a function as an argument. 

// 5. The Call Stack:
// It is where the functions are placed when executing your code. The functions are executed 
// on a 'last in, first out' order.


// 6. The Heap:
// It stores everything, and transfers time-related code to the quere. 

// 7. The Queue:
// It receives time-related code from the heap and transfers the code to the stack once the stack is empty.
// Code is processed in a 'first-in and first-out' basis.

// Part 2:

// What is the difference between these two functions?
//   var sayHi = function(){
//    return "Hi!";
//  }
// This a function expression. It uses the keyword 'var', which is associated with hoisting, and thus this function
// must be called after it has been written.

//  function sayHello(){
//    return "Hello!";
//  }
// This is a function declaration, no keyword 'var', no associated hoisting, and thus can be called at anytime. 

// What is the difference between using the var keyword inside of a function vs. outside of a function?
// Scope. When the var keyword is used within the function, that variable is locally scoped and can only be
// accessed within the boundries of the function. 
// When used outside the function, the variable is global and can be accessed anywhere. 

// Why do we need/use higher order functions? What does it enable us to do? 
// Ease of use, they enables us to pass functions as variables. 

// Explain in your own words, what happens to the stack and queue when the following code is run (please also include what it will output):
// function logFirst(){
//   console.log("first");
// }

// function logSecond(){
//   console.log("second");
// }

// function logThird(){
//   console.log("third");
// }

// logFirst();
// setTimeout(logSecond,0);
// logThird();

// logFirst is placed on the stack, executed, and then removed. 
// setTimeout is placed on the stack, which calls logSecond.
// logSecond is placed in the heap and is to wait 0 ms, then move to the queue
// logThird is placed on the stack, executed, and then removed. 
// logSecond then moves to the stack after logThirs has been removed, is execcuted, and then removed. 

// Output:
// first
// third
// second

// Write a function called liftoff that starts at 10 and console.logs
// the previous number after a second. Once the count is at 0, the function should stop decrementing and console.log("liftoff!")

var clear = setInterval(liftOff, 1000);
var number = 10;
function liftOff() {
  if (number > 0)
  {
    console.log(number);
  }
  else 
  {
    console.log("liftoff!");
    clearInterval(clear);
  }
 number -=1;
}

// Write a function called each which takes in an array and a callback, and invokes the callback on each element in the array.
// This function should not return anything. This function should accept an array as its first parameter and a callback function as its second.

function each(array, callback) {
  callback(array);
}
each([1,2,3], function(element) {
    console.log(element);
});

// Write a function called transform which takes in an array and a callback and returns a new array with the results of the invoked
// callback on each element in the array. This function should accept an array as its first parameter and a callback function as its second.

function each(array, callback) {
  var myArray = [];
  for (var i = 0; i < array.length; i++)
  myArray.push(callback(array[i]));
  return myArray;
}
each([1,2,3], function(element) {
    return element * 3;
});










