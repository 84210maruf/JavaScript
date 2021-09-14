console.log("|||::::::::START HARE PART 05:::::::|||");

const promise1 = Promise.resolve
(`Promise 1 resolve`);

// It's Return a Promise--->"resolve/reject"
const promise2 = new Promise((resolve, 
reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolve`)
    }, 3000);
});

// print 1 promise who is faster
Promise.race([promise1, promise2]).then(res => console.log
    (res));
