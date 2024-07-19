//Activity 1: Object Creation and Access
//- Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
console.log(`--------------TASK 1--------------`);
let books={
    "title" : "Atomic Habits",
    "author" : "James Clear",
    "year" : 2016
}
console.log(books);

//- Task 2: Access and log the title and author properties of the book object.
console.log(`--------------TASK 2--------------`);
console.log(`${books.title} is written by ${books.author}`);

//Activity 2: Object Methods
//- Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log(`--------------TASK 3--------------`);
books.getDetails=function () {
    return `${books.title} is written by ${books.author}`
}
console.log(books.getDetails());

//- Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log(`--------------TASK 4--------------`);
books.upYear=function(year){
    return this.year=year
}
books.upYear(2017)
console.log(books);

//Activity 3: Nested Objects
//- Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
console.log(`--------------TASK 5--------------`);
let library={
    "book1":{
        "title" : "The subtle art of not giving a Fck",
        "author" : "Mark Manson"        
    },
    "book2":{
        "title" : "Atomic Habits",
        "author" : "James Clear" 
    }
}
console.log(library);

//- Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`--------------TASK 6--------------`);
console.log(library.book1.title);
console.log(library.book2.title);

//Activity 4: The this Keyword
//- Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log(`--------------TASK 7--------------`);
books.details=function(){
    return `${this.title} is written by ${this.author}`
}
console.log(books.details());

//Activity 5: Object Iteration
//- Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log(`--------------TASK 8--------------`);
for(const key in books){
    if (books.hasOwnProperty(key)) {
        console.log(`${key}:${books[key]}`);
    }
}

//- Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(`--------------TASK 9--------------`);
console.log(Object.keys(books));
console.log(Object.values(books));