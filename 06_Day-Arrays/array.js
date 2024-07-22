// Activity 1: Array Creation and Access
//- Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
console.log(`--------------TASK 1--------------`);
let array=[1,2,3,4,5]
console.log(array);

//- Task 2: Access the first and last elements of the array and log them to the console.
console.log(`--------------TASK 2--------------`);
console.log(array[0]);
console.log(array[4]);

//Activity 2: Array Methods (Basic)
//- Task 3: Use the push method to add a new number to the end of the array and log the updated array.
console.log(`--------------TASK 3--------------`);
function arrayAdd(array,element) {
    array.push(element)
    return array
}
console.log(arrayAdd(array,6));

//- Task 4: Use the pop method to remove the last element from the array and log the updated array.
console.log(`--------------TASK 4--------------`);
function arrayDel(array) {
    array.pop()
    return array
}
console.log(arrayDel(array));

//- Task 5: Use the shift method to remove the first element from the array and log the updated array.
console.log(`--------------TASK 5--------------`);
function arrayShift(array) {
    array.shift()
    return array
}
console.log(arrayShift(array));

//- Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
console.log(`--------------TASK 6--------------`);
function arrayUnshift(array,element) {
    array.unshift(element)
    return array 
}
console.log(arrayUnshift(array,1));

//Activity 3: Array Methods (Intermediate)
//- Task 7: Use the map method to create a new array where each number is doubled and log the new array.
console.log(`--------------TASK 7--------------`);
function arrayDouble(element) {
    return element+element
}
console.log(array.map(arrayDouble));

//- Task 8: Use the filter method to create a new array with only even numbers and log the new array.
console.log(`--------------TASK 8--------------`);
let even=(element)=>{
    if(element%2===0){
        return element
    }
}
console.log(array.filter(even))

//- Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
console.log(`--------------TASK 9--------------`);
let reduce=(element,result=0)=>{
    return result+=element
}
console.log(array.reduce(reduce));

//- Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log(`--------------TASK 10--------------`);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//- Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log(`--------------TASK 11--------------`);
array.forEach(element => {
    console.log(element);
});

//- Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
console.log(`--------------TASK 12--------------`);
let twoDArray=[[1,2,3],[4,5,6],[7,8,9]]
console.log(twoDArray);

//- Task 13: Access and log a specific element from the two-dimensional array.
console.log(`--------------TASK 13--------------`);
console.log(twoDArray[0][1]);