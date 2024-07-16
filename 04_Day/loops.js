//Activity 1: For Loop
console.log(`--------------TASK 9--------------`);
function oneTo10() {
    for(let i=1;i<=10;i++){
        console.log(i)
    }
}
oneTo10()

console.log(`--------------TASK 2--------------`);
function table(num) {
    for(let i=1;i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}
table(5)

//Activity 2: While Loop
console.log(`--------------TASK 3--------------`);
function sum() {
    let i=1
    let result=0
    while(i<=10){
        result+=i
        i++
    }
    return result
}
console.log(sum());

console.log(`--------------TASK 4--------------`);
function print10to1() {
    let i=10
    while(i>0){
        console.log(i)
        i--
    }
}
print10to1()

//Activity 3: Do...While Loop
console.log(`--------------TASK 5--------------`);
function print1to5(params) {
    let i=1
    do {
        console.log(i);
        i++
    }
    while(i<=5)
}
print1to5()

console.log(`--------------TASK 6--------------`);
function fac(num) {
    let i=1
    let result =1
    do{
        result=result*i
        i++
    }
    while(i<=num)
        return result
}
console.log(fac(5));

//Activity 4: Nested Loops
console.log(`--------------TASK 7--------------`);
function pattern() {
    for (let i = 1; i <=5 ; i++) {
        let result=""
        for (let j = 0; j < i; j++) {
            result+="* "
        }
        console.log(result);
    }
}
pattern()

//Activity 5: Loop Control Statements
console.log(`--------------TASK 8--------------`);
function skip() {
    for(let i=1;i<=10;i++){
        if(i===5){
            continue
        }
        console.log(i)
    }
}
skip()

console.log(`--------------TASK 9--------------`);
function stop() {
    for(let i=1;i<=10;i++){
        if(i===7){
            break
        }
        console.log(i)
    }
}
stop()

