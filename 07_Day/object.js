console.log(`--------------TASK 1--------------`);
let books={
    "title" : "Atomic Habits",
    "author" : "James Clear",
    "year" : 2016
}
console.log(books);

console.log(`--------------TASK 2--------------`);
console.log(`${books.title} is written by ${books.author}`);

console.log(`--------------TASK 3--------------`);
books.getDetails=function () {
    return `${books.title} is written by ${books.author}`
}
console.log(books.getDetails());

console.log(`--------------TASK 4--------------`);
books.upYear=function(year){
    return this.year=year
}
books.upYear(2017)
console.log(books);

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

console.log(`--------------TASK 6--------------`);
console.log(library.book1.title);
console.log(library.book2.title);

console.log(`--------------TASK 7--------------`);
books.details=function(){
    return `${this.title} is written by ${this.author}`
}
console.log(books.details());

console.log(`--------------TASK 8--------------`);
for(const key in books){
    if (books.hasOwnProperty(key)) {
        console.log(`${key}:${books[key]}`);
    }
}

console.log(`--------------TASK 9--------------`);
console.log(Object.keys(books));
console.log(Object.values(books));