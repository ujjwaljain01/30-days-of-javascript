//## Activity 1: Understanding Closures
//- Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

console.log(`--------------TASK 1--------------`);
function one() {
    hello = "Hello World"
    function two() {
        console.log(hello);
    }
    two()
}
one()

//- Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

console.log(`--------------TASK 1--------------`);
function counter(){
    let count = 0
    function incby1(){
       return count = count + 1
    }
    function incby2(){
        return count = count +2
    }
    incby1()
    incby2()
    return count
}
console.log(counter());

//## Activity 2: Practical Closures
//- Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

console.log(`--------------TASK 1--------------`);
function uniqueIds() {
    let uniqueId = 0
    function last () {
        const lastId = uniqueId
        return `and Last ID is: ${lastId}`
    }
    const las= last()
    uniqueId++
    return `Current ID: ${uniqueId} ${las}`
}
console.log(uniqueIds())

//- Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

console.log(`--------------TASK 1--------------`);
function names(username) {
    return function greet(){
        return `Hello,  ${username}`;
    }
}
console.log(names("ujjwal")())//calling inner function that is in return statement bcz 

//## Activity 3: Closures in Loops

let funcArray = []
for (let i = 0; i < 5; i++) {
    funcArray.push(
        (function loops(i) {
            return (function one(i){
                return i
            })(i);//USING IIFE
    })(i))
}

console.log(funcArray);

