//## Activity 3: Queue

//- Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue{
    constructor(){
        this.queue = []
    }
    enqueue(value){
        this.queue.unshift(value)
    }
    dequeue(){
        if(this.empty()){
            return null
        }
        return (this.queue.shift()+" printed")
    }
    front(){
        return this.queue[0]
    }
    empty(){
        return this.queue === 0
    }
}

//- Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

const printer = new Queue()
printer.enqueue("file 1")
printer.enqueue("file 2")
console.log(printer.dequeue());
console.log(printer.dequeue());
