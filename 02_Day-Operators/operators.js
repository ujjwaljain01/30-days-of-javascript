//Activity 1: Arithmetic Operations
//Task 1: Write a program to add, subtract, multiply, divide and  find remainder two numbers and log the result to the console.
console.log(`--------------TASK 1--------------`);
function calculator(num1,num2,operation) {
    switch (operation) {
        case `+`:
            return num1+num2
            break;
        case `-`:
            return num1-num2
            break;
        case `*`:
            return num1*num2
            break;
        case `/`:
            return num1/num2
            break;
        case `%`:
            return num1%num2
            break;
        default:
            return `pick an operation`
            break;
    }
}
console.log(calculator(1,2,`/`));

// Activity 2: Assignment Operators
// Task 6: Use the +=, -= operator to add a number to a variable and log the result to the console.
console.log(`--------------TASK 2--------------`);
function addOrSubItself(num,operation) {
    if(operation===`+=`){
        return num+=num
    }
    else if(operation===`-=`){
        return num-=num
    }
    else{
        return `Wrong Input`
    }
}
console.log(addOrSubItself(2,`-=`));

//Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log(`--------------TASK 3--------------`);
function compare(num1,num2) {
    if(num1>num2){
        return num1
    }
    else if(num1<num2){
        return num2
    }
    else{
        return `same`
    }
}
console.log(`Greater no is:`,compare(2,3));

//- Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(`--------------TASK 4--------------`);
function compareEquals(num1,num2) {
    if(num1>=num2){
        return `${num1} is greator or eqaul to ${num2}`
    }
    else{
        return `${num2} is greator`
    }
}
console.log(compareEquals(3,3));

//- Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log(`--------------TASK 5--------------`);
function compareDatatype(num1,num2) {
    if(num1===num2){
        return `equal in datatype also`
    }
    else if(num1==num2){
        return `equal but not in data type`
    }
    else{
        return `Not equal`
    }
}
console.log(compareDatatype(2,`2`));

//Activity 4: Logical Operators
//- Task 11: Write a program that uses the &&,||,! operator to combine two conditions and log the result to the console.
console.log(`--------------TASK 6--------------`);
function toVote(age,voterId) {
    if(age>=18 && voterId===`Yes`){
        return `eligble`
    }
    else if(age>=18 || voterId===`Yes`){
        return `not met one req`
    }
    else if(!(age>=18)){
        return `age should be atleast 18`
    }
}
console.log(toVote(17,`No`));

//Activity 5: Ternary Operator
//- Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
console.log(`--------------TASK 7--------------`);
function posOrNeg(num) {
    return (num>0 ? `positive`:`Negative`)
}
console.log(posOrNeg(8));