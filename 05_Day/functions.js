//Activity 1: Function Declaration
console.log(`--------------TASK 1--------------`);
function evenOdd(num) {
    return (num%2===0 ? `even`: `odd`)
}
console.log(evenOdd(14));

console.log(`--------------TASK 2--------------`);
function square(num) {
    return num*num
}
console.log(square(5));

// Activity 2: Function Expression
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

console.log(`--------------TASK 4--------------`);
function concate(str1,str2) {
    return str1+str2
}
console.log(concate("Hello ","World"));

//Activity 3: Arrow Functions
console.log(`--------------TASK 5--------------`);
let twoSum=(num1,num2)=>{
    return num1+num2
}
console.log(twoSum(1,2));

console.log(`--------------TASK 6--------------`);
let check=(str,char)=>{
    if(str.includes(char)){
        return true
    }
    return false
}
console.log(check("func1","h"));

//Activity 4: Function Parameters and Default Values
console.log(`--------------TASK 7--------------`);
let product=(num1,num2=2)=>{
    return num1*num2
}
console.log(product(2));

console.log(`--------------TASK 8--------------`);
let greeting=(name,age=19)=>{
    return `Hello ${name}, Welcome to our office ${age}`
}
console.log(greeting("Ujjwal"));

//Activity 5: Higher-Order Functions
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