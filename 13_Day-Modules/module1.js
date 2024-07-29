//- Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
export function addTwo(num1,num2) {
    return num1+num2
}

//- Task 2: Create a module that exports an object represen.ting a person with properties and methods. Import and use this module in another script.
export const person = {
    name: "ujjwal",
    age: "19",
    greet: function(){
        console.log(`Hello, ${this.name}`);
    }
}

//- Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
//- Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
export function add(num1,num2){
    return num1 + num2
}
export function multi(num1,num2){
    return num1 * num2
}
export function sub(num1,num2){
    return num1 - num2
}
export function divide(num1,num2){
    return num1 / num2
}

//- Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
export default function hello() {
    return `Hello World`
}

