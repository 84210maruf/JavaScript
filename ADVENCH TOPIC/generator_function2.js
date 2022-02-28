
const takeOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order Take from ${customer}`);
        },1000);
    });
};

const processOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order Process for ${customer}`);
        },2000);
    });
};

const completeOrder = (customer) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Order Completed for ${customer}`);
        },3000);
    });
};

async function *generator(customer){

    yield await takeOrder(customer);
    yield await processOrder(customer);
    yield await completeOrder(customer);
};
const gen = generator("Maruf");

gen.next().then(({value})=> console.log(value));
gen.next().then((res)=> console.log(res));
gen.next().then(({value})=> console.log(value));