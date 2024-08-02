//## Activity 1: Basic Recursion
//- Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

console.log(`--------------TASK 1--------------`);
function fact(n) {
    if(n <= 1){
        return 1
    }
    return n * fact(n-1)
}

console.log(fact(5));
console.log(fact(1));
console.log(fact(6));

//- Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

console.log(`--------------TASK 2--------------`);
function fibo(n) {
    if(n <= 1){
        return n
    }
    return fibo(n - 1)+fibo(n - 2)
}

console.log(fibo(3));

//## Activity 2: Recursion with Arrays
//- Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

console.log(`--------------TASK 3--------------`);
function sumArray(array,sum = 0,len = 0) {
    while(array.length > len){
        sum += array[len]
        return sumArray(array,sum,len+1)
    }
    return sum
}

console.log(sumArray([1,2]));

//- Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

console.log(`--------------TASK 4--------------`);
function findmax(array,current=array[0],len = 0) {
    while(array.length > len){
        if(current < array[len]){
            current = array[len]
        }
        return findmax(array,current,len+1)
    }
    return current
}

console.log(findmax([1,2,4]));
console.log(findmax([1,2,58,7]));
console.log(findmax([112,27,49,189,192]));

//## Activity 3: String Manipulation with Recursion
//- Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

console.log(`--------------TASK 5--------------`);
function revString(string,result= "") {
    if(string.length === 0){
        return result
    }
    result += string[string.length-1]
    return revString(string.substring(0,string.length-1),result)
}

console.log(revString("Hello"));
console.log(revString(""));
console.log(revString("Tree"));

//- Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

console.log(`--------------TASK 6--------------`);
function palin(string) {
    string  = string.toLowerCase(string)
    if(string.length <= 1){
        return true
    }
    if(string[0] === string[string.length-1]){
        return palin(string.substring(1,string.length-1))
    }
    return false
}

console.log(palin("nitiN"));
console.log(palin("hello"));
console.log(palin("maDam"));

//## Activity 4: Recursive Search
//- Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

console.log(`--------------TASK 7--------------`);
function binarySearch(array,element,start=0,end=array.length-1) {
    let mid = Math.floor((start+end)/2)
    if(start > end){
        return `${element} not found`
    }
    if(array[mid] === element){
        return `${mid} is the index`
    }
    else if(element > array[mid]){
        return binarySearch(array,element,mid+1,end)
    }
    else{
        return binarySearch(array,element,start,mid-1)
    }
}

console.log(binarySearch([1,2,3,4],4));
console.log(binarySearch([1,2,3,4],5));
console.log(binarySearch([1,2,3,4],1));

//- Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

console.log(`--------------TASK 8--------------`);
function countoccur(array,target,len = 0,count = 0){
    if(array.length > len){
        if(array[len] === target){
            count += 1
        }
        return countoccur(array,target,len + 1,count)
    }
    return count
}
console.log(countoccur([1,2,1,3,1],1));

//## Activity 5: Tree Traversal (Optional)
//- Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

console.log(`--------------TASK 9--------------`);
console.log(`--------------TASK 10--------------`);
class BSTNode{
    constructor(key,left,right){
        this.key = key
        this.left = left
        this.right = right
    }
}
class BST{
    constructor(){
        this.root = null
    }
    inOrderTraversal() {
       let result = []
       this.inOrder(this.root,result)
       return result
    }
    inOrder(node,result){
         while(node!=null){
            this.inOrder(node.left,result)
            result.push(node.key)
            this.inOrder(node.right,result)
        }
    }
//- Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

    recursiveDFS(root){
        if(root===null){
            return 0
        }
        const leftvalues = this.recursiveDFS(root.left)
        const rightvalues = this.recursiveDFS(root.right)
        return Math.max(leftvalues,rightvalues)+1
    }
}
