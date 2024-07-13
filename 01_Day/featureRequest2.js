/*2.Reassignment Demo: Create a script that demonstrates the difference 
in behavior between let and const when it comes to reassignment.*/
let no = 4;
console.log(`Before reassigning:`, no);
no = 6;
console.log(`After reassigning:`, no);
const no2 = 4;
console.log(`Before reassigning:`, no2);
//no2=6 error is Type error:assgnment to constant variable
