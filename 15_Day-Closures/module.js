//## Activity 4: Module Pattern
//- Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function Store(){
    let itemsList = []

    this.add = function (item) {
        itemsList.push(item)
        return `${item} is added`
    }

    this.remove = function(item){
        const index = itemsList.indexOf(item)
        if(index === -1){
            return `Item not found`
        }
        else{
            itemsList.splice(index,1)
            return `Item is deleted`
        }
    }

    this.list = function(){
        return itemsList
    }
}

const mystore = new Store()
console.log(mystore.add("bucket"))
console.log(mystore.add("brush"))
console.log(mystore.add("Soap"))
console.log(mystore.remove("bucket"));
console.log(mystore.list());