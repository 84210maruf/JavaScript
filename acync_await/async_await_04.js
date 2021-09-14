console.log("|||::::::::START HARE PART 04:::::::|||");

// It's Return a Promise--->"resolve"
const promise1 = Promise.resolve(`Promise 1 resolve`);

// It's Return a Promise--->"resolve"
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolve`)
    }, 3000);
});

Promise.all([promise1, promise2]).then(res => console.log(res));

console.log(`Last line`);