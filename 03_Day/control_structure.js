// Activity 1: If-Else Statements
console.log(`--------------TASK 1--------------`);
function posOrNeg(num) {
    if(num>0){
        return `Positive`
    }
    else if(num===0){
        return `zero`
    }
    else{
        return `negative`
    }
}
console.log(posOrNeg(-5));

console.log(`--------------TASK 2--------------`);
function toVote(age) {
    if(age>=18){
        return `eligble`
    }
    return `Not Eligble`
}
console.log(toVote(18));

//Activity 2: Nested If-Else Statements
console.log(`--------------TASK 3--------------`);
function findLargest(num1,num2,num3) {
    if(num1>num2){
        if(num1>num3){
            return num1
        }
        else{
            return num3
        }
    }
    else{
        if(num2>num3){
            return num2
        }
        else{
            return num3
        }
    }
}
console.log(findLargest(1,2,0));

//Activity 3: Switch Case
console.log(`--------------TASK 4--------------`);
function days(num) {
    switch (num) {
        case 1:
            return `Monday`
            break;
        case 2:
            return `Tuesday`
            break;
        case 3:
            return `Wednesday`
            break;
        case 4:
            return `Thursday`
            break;
        case 5:
            return `Friday`
            break;
        case 6:
            return `Saturday`
            break;
        case 7:
            return `Sunday`
            break;
        default:
            return `Wrong Input`
            break;
    }
}
console.log(days(3));

console.log(`--------------TASK 5--------------`);
function grade(num) {
    if(num>100){
        return `Wrong Input`
    }
    switch (true) {
        case (num >= 90):
            return `A`
            break;
        case (num >= 80 && num < 90):
            return `B`
            break;
        case (num >= 70 && num < 80):
            return `C`
            break;
        case (num >= 60 && num < 70):
            return `D`
            break;
        case (num >= 50 && num < 60):
            return `E`
            break;
        case (num >= 40 && num < 50):
            return `F`
            break;
        default:
            return `FAIL`
            break;
    }
}
console.log(grade(100));

//Activity 4: Conditional (Ternary) Operator
console.log(`--------------TASK 6--------------`);
function evenOdd(num) {
    return (num%2===0 ? `even`: `odd`)
}
console.log(evenOdd(14));

//Activity 5: Combining Conditions
console.log(`--------------TASK 7--------------`);
function leapYear(year) {
    if(year%4===0 && year%100!==0 || year%400===0){
        return `${year} is a leap year`
    }
    else{
        return `Not a leap year`
    }
}
console.log(leapYear(2024));