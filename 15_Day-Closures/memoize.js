//## Activity 5: Memoization
//- Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize() {
    const cache = {}
    return function (...args){
        const key = JSON.stringify(...args)
        if(cache[key]){
            return cache[key]
        }
        else{
            const result = add(...args)
            cache[key] = result
            return result
        }
    }
}

function add(a,b) {
    return a+b
}

const memoizeadd = memoize(add)

console.log(memoizeadd(3,4));
console.log(memoizeadd(3,4));
console.log(memoizeadd(1,2));

//- Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize2() {
    const cache = {}
    return function (...args){
        const key = JSON.stringify(...args)
        if(cache[key]){
            return cache[key]
        }
        else{
            const result = fact(...args)
            cache[key] = result
            return result
        }
    }
}

function fact(n) {
    if(n <= 1){
        return 1 
    }
    return n * fact(n-1)
}

const memoizefact = new memoize2(fact)

console.log(memoizefact(5));
console.log(memoizefact(5));
console.log(memoizefact(4));