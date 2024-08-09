//## Activity 2: Stack

//- Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class stack{
    constructor(){
        this.stack  = []
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        if(this.empty()){
            return null

        }
        return this.stack.pop()
    }
    empty(){
        return this.stack.length === 0
    }
    peek(){
        return this.stack[this.stack.length-1]
    }
}

//- Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(string){
    const mystack = new stack()
    for (let i = 0; i < string.length; i++) {
        const element = string[i]
        mystack.push(element)
    }
    let result = ""
    while(!mystack.empty()){
        result += mystack.pop()
    }
    return result
}

console.log(reverseString("Hello"));
