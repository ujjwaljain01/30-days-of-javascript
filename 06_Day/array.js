// Activity 1: Array Creation and Access
console.log(`--------------TASK 1--------------`);
let array=[1,2,3,4,5]
console.log(array);

console.log(`--------------TASK 2--------------`);
console.log(array[0]);
console.log(array[4]);

//Activity 2: Array Methods (Basic)
console.log(`--------------TASK 3--------------`);
function arrayAdd(array,element) {
    array.push(element)
    return array
}
console.log(arrayAdd(array,6));

console.log(`--------------TASK 4--------------`);
function arrayDel(array) {
    array.pop()
    return array
}
console.log(arrayDel(array));

console.log(`--------------TASK 5--------------`);
function arrayShift(array) {
    array.shift()
    return array
}
console.log(arrayShift(array));

console.log(`--------------TASK 6--------------`);
function arrayUnshift(array,element) {
    array.unshift(element)
    return array 
}
console.log(arrayUnshift(array,1));

//Activity 3: Array Methods (Intermediate)
console.log(`--------------TASK 7--------------`);
function arrayDouble(element) {
    return element+element
}
console.log(array.map(arrayDouble));

console.log(`--------------TASK 8--------------`);
let even=(element)=>{
    if(element%2===0){
        return element
    }
}
console.log(array.filter(even))

console.log(`--------------TASK 9--------------`);
let reduce=(element,result=0)=>{
    return result+=element
}
console.log(array.reduce(reduce));

console.log(`--------------TASK 10--------------`);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(`--------------TASK 11--------------`);
array.forEach(element => {
    console.log(element);
});

console.log(`--------------TASK 11--------------`);
let twoDArray=[[1,2,3],[4,5,6],[7,8,9]]
console.log(twoDArray);

console.log(`--------------TASK 12--------------`);
console.log(twoDArray[0][1]);