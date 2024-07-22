//Activity 1: Function Declaration
//- Task 1: Write a function to check if a number is even or odd and log the result to the console.
console.log(`--------------TASK 1--------------`);
function evenOdd(num) {
    return (num%2===0 ? `even`: `odd`)
}
console.log(evenOdd(14));

//- Task 2: Write a function to calculate the square of a number and return the result.
console.log(`--------------TASK 2--------------`);
function square(num) {
    return num*num
}
console.log(square(5));

// Activity 2: Function Expression
//- Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
console.log(`--------------TASK 3------------`);
function max(num1,num2) {
    if(num1>num2){
        return num1
    }
    else if(num1<num2){
        return num2
    }
    else{
        return `Both are same`
    }
}
console.log(max(1,2));

//- Task 4: Write a function expression to concatenate two strings and return the result.
console.log(`--------------TASK 4--------------`);
function concate(str1,str2) {
    return str1+str2
}
console.log(concate("Hello ","World"));

//Activity 3: Arrow Functions
//- Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
console.log(`--------------TASK 5--------------`);
let twoSum=(num1,num2)=>{
    return num1+num2
}
console.log(twoSum(1,2));

//- Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
console.log(`--------------TASK 6--------------`);
let check=(str,char)=>{
    if(str.includes(char)){
        return true
    }
    return false
}
console.log(check("func1","h"));

//Activity 4: Function Parameters and Default Values
//- Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
console.log(`--------------TASK 7--------------`);
let product=(num1,num2=2)=>{
    return num1*num2
}
console.log(product(2));

//- Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
console.log(`--------------TASK 8--------------`);
let greeting=(name,age=19)=>{
    return `Hello ${name}, Welcome to our office ${age}`
}
console.log(greeting("Ujjwal"));

//Activity 5: Higher-Order Functions
//- Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
console.log(`--------------TASK 9--------------`);
function higher(func,num) {
    for (let i = 0; i < num; i++) {
        func()
    }
}
function call() {
    console.log("Hello");
}
higher(call,3)

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
console.log(`--------------TASK 10--------------`);
function higherOrder(func1,func2,str){
    const resultfromfunc1= func1(str)
    const resultfromfunc2=func2(resultfromfunc1)
    return resultfromfunc2
}
function addHello(str) {
    return str+="hello "
}
function addWorld(str) {
    return str+"world";
}

console.log(higherOrder(addHello,addWorld,""))