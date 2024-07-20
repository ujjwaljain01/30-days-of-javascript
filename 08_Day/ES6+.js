//Activity 1: Template Literals
//- Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name="Ujjwal"
const age = 19
console.log(`Hello, ${name} ${age}`);

//- Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`Hello
${name}
${age}`);

//Activity 2: Destructuring
//- Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const array=['Rahul','priyanshu','kartik','vishal']
const [name1,,,name2]=array
console.log(name1,name2);

//- Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const object={
    "title":"Atomic Habits",
    "author":"James Clear"
}
const {title,author}=object
console.log(title,author);

//Activity 3: Spread and Rest Operators
//- Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const array1=[1,2,3,4]
const array2=[...array1,5,6,7,8]
console.log(array2);

//- Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function add(...operands) {
    let total=0
    for(const operand of operands){
        total+=operand
    }
    return total
}
console.log(add(1,2,3,4,5));

//Activity 4: Default Parameters
//- Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(num1,num2=1) {
    return num1*num2
}
console.log(product(2));

//Activity 5: Enhanced Object Literals
//- Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let add5=function(age){
    return age+5
}
const person={name,age,add5}
console.log(person);

//- Task 9: Create an object with computed property names based on variables and log the object to the console.
const LASTNAME = "lastname"
const MIDDLENAME="Middlename"
const fullname={
    "firstname":[name],
    [LASTNAME]:"jain"
}
fullname[MIDDLENAME]="praveen"
console.log(fullname);

