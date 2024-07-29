//## Activity 1: Creating and Exporting Modules
//- Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
import  addTwo  from "./module1.js";


console.log(addTwo(2,3));

import {person} from "./module1.js"
//- Task 2: Create a module that exports an object represen.ting a person with properties and methods. Import and use this module in another script.
console.log(person.name);
person.greet()

//## Activity 2: Named and Default Exports
//- Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import hello from "./module1.js";
console.log(hello());

//- Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

//## Activity 3: Importing Entire Modules
//- Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import {add, sub, multi, divide} from "./module1.js";
console.log(add(3,4));
console.log(sub(3,4));
console.log(multi(3,4));
console.log(divide(3,4));

//## Activity 4: Using Third-Party Modules
//- Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import _ from 'lodash'

const arr = [0,1,2,3,4,5]
const chunks = _.chunk(arr,2)
console.log(chunks);

