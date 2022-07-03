// memoization
// javascript object,
// keys will be arg to function, value will be return value
// problem with old fib is that it's exponential
// saving some values will help reduce that complexity
const fib = (n, memo = {}) => {
    // pass memo object if none 
    // instantiate memo object
    if (n in memo) return memo[n];
    //everytime we use our recursive function, a number
    // will be stored
    // if our number is already in the memo, no need
    // to calculate just use the stored key/value pair
    if (n <=2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    // now we want to return the stored key/value pair
    // everytime instead of just the raw number,
    // that way we store info and complexity is reduced,
    // also need to remember to pass the current memo,
    // to our recursive calls
    return memo[n];
};

console.log(fib(19));
console.log(fib(9));
console.log(fib(27));
// wow much faster!

//dynamic programming is finding patterns in a smaller
// portion of code (of a larger problem) that we can extrapolate
// to make the function more efficient/easier