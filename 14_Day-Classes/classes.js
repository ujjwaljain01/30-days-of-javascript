class Person{
    fullname = "Vishal Sharma"
    constructor(firstname="Kartik",lastname="Jain",age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    greet() {
        return `Hello, ${this.firstname} ${this.age}`;
    }
    static greets(){
        return `WELCOME`
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullname(x){
        this.fullname=x
    }

}
//## Activity 1: Class Definition
//- Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
console.log(`--------------TASK 1--------------`);
const P1 = new Person("Ujjwal", 18)
console.log(P1.greet())

//- Task 2: Add a method to the Person class that updates the age property and logs the updated age.
console.log(`--------------TASK 2--------------`);
Person.prototype.updateAge = function (age){
    this.age=age
}
P1.updateAge(21)
console.log(P1.greet())

//## Activity 2: Class Inheritance
//- Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
console.log(`--------------TASK 3--------------`);
class Student extends Person {
    static count = 1
    constructor(firstname,studentId){
        super(firstname)
        this.studentId = studentId
        this.count+1
    }
    getId(){
        return `Student Id is : ${this.studentId}`
    }
    greet(){
        return `Hello ${super.fullname} ${this.studentId}`
    }
}
const S1 = new Student("Rahul",1)
console.log(S1.getId())

//- Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log(`--------------TASK 4--------------`);
console.log(S1.greet());

//## Activity 3: Static Methods and Properties
//- Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(`--------------TASK 5--------------`);
console.log(Person.greets());

//- Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(`--------------TASK 6--------------`);
console.log(Student.count);

//## Activity 4: Getters and Setters
//- Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
console.log(`--------------TASK 7--------------`);
const P2 = new Person("ujjwal","jain",19)
console.log(P2.fullname);

//- Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
console.log(`--------------TASK 8--------------`);
P2.fullname = "Rahul Verma"
console.log(P2.fullname);

//## Activity 5: Private Fields (Optional)
//- Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
console.log(`--------------TASK 9--------------`);
class account{
    #balance
    constructor(balance){
        this.#balance = balance
    }
    getBalance(){
        return this.#balance
    }
    #deposit(amount){
        return this.#balance = this.#balance + amount
    }
    deposited(amount){
        return this.#deposit(amount)
    }
    #withdraw(amount){
        if(this.#balance-amount<0){
            return `insufficient balance`
        }
        return this.balance = this.#balance - amount
    }
    withdrawed(amount){
        return this.#withdraw(amount)
    }
}

//- Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const A1 = new account(500)
console.log(`--------------TASK 10--------------`);
console.log(A1.getBalance());
console.log(A1.deposited(500));
console.log(A1.getBalance());
console.log(A1.withdrawed(600));
console.log(A1.getBalance());