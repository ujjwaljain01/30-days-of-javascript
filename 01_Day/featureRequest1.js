/*Feature Request:
1.Variable Types Console Log: Write a script that declares variables
of different data types and logs both the value and type of each
variable to the console.*/

function FR1(data) {
  const array = [data, typeof data];
  return array;
}
console.log(FR1(`A`));
