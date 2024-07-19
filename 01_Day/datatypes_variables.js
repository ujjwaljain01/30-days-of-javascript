//Activity 1: Variable Declaration
//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
console.log(`--------------TASK 1--------------`);
var number = 10;
console.log(number);

// Task 2: Declare a variable using let , assign it a string, and log the value to the console. 
console.log(`--------------TASK 2--------------`);
let string = "Ujjwal";
console.log(string);

//Activity 2: Constant Declaration
// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
console.log(`--------------TASK 3--------------`);
const bool = true;
console.log(bool);

//Activity 3: Data Types
//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
console.log(`--------------TASK 4--------------`);
let number2 = 10;
console.log(`The type of number is`, typeof number);

let string2 = "jain";
console.log(`The type of string is`, typeof string2);

let boolean = false;
console.log(`The type of boolean is`, typeof boolean);

let obj = {
  Name: "Ujjwal Jain",
  Age: 19,
};
console.log(`The type of object is`, typeof obj);

let array = [1, 2, 3, 4];
console.log(`The type of array is`, typeof array);

let variable1 = null;
console.log(`The type of null is`, typeof variable1);

let variable2 = undefined;
console.log(`The type of array is`, typeof variable2);

//Activity 4: Reassigning Variables
//Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
console.log(`--------------TASK 5--------------`);
let no = 4;
console.log(`Before reassigning:`, no);
no = 6;
console.log(`After reassigning:`, no);

//Activity 5:Understanding const
//Task 6: Try reassigning a variable declared with const and observe the error.
console.log(`--------------TASK 6--------------`);
const no2 = 4;
console.log(`Before reassigning:`, no2);
//no2=6 error is Type error:assgnment to constant variable
