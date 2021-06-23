
//....ES6 features.....


// .....pread operator...

// General array..
const numbers = [1,2,3,4,5];
//numbers Copy to newNumbers..
const newNumbers = [...numbers,6,7,8,9,10];
console.log(numbers)
console.log(newNumbers);

//...Rest Operator....

// with functions
const learn = (...args) => {
    console.log(args);
}
learn(10,20,30,40,50);
learn("A","B","CX");
learn(numbers);