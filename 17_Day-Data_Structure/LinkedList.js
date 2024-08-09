//## Activity 1: Linked List

//- Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class node {
    constructor(value,next = null) {
        this.value = value
        this.next = next
    }
}

//- Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
    constructor() {
        this.head = null
    }
    addAtEnd(value){
        const newNode =  new node(value)
        if(!this.head){
            this.head = newNode
        }
        else{
            let current = this.head
            while(current.next != null){
                current = current.next
            }
            current.next = newNode
        }
    }
    
    removeAtEnd(){
        if(!this.head){
            return 'Nothing to delete'
        }
        let current = this.head
        while(current.next.next != null){
            current = current.next
        }
        current.next = null
    }

    display(){
        if(!this.head){
            return 'Nothing to traverse'
        }
        const result = []
        let current = this.head
        while(current != null){
            result.push(current.value)
            current = current.next
        }
        return (result.join(" -> "))
    }
}

const myLL = new LinkedList()
myLL.addAtEnd(2)
myLL.addAtEnd(4);
myLL.addAtEnd(6);
myLL.addAtEnd(8);
console.log(myLL.display());
myLL.removeAtEnd()
console.log(myLL.display());
