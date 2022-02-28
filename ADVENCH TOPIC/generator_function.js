//Initial Generator Function...

function* generator(){
    yield 1;
    yield 'Akash roy';
    yield {a:2,b:3};
    return "DONE";//If Return Then Close the function
    yield 4;
}

let iterator = generator();

console.log(...iterator);

// Object iterate with Generator...
let object = {    a: 10,
    b: 20,
    c: 30,
    d: "Maruf",
}

function *generator2(obj){
    const entries = Object.entries(obj);
    console.log(entries); //[ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 'Maruf' ] ]

    for (let element of entries){
        yield element[1];
    }
}
let iterator2 = generator2(object);
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());


// Use case Of Generator...
function *range(start, end, step) {
    let current = start;
    while(current<end){
        yield current;
        current += step;
    }
}
let iterator3 = range(1,30,2);
console.log(...iterator3);

//Other Use Case...
function *generator3(a,b) {
    let  k = yield a+b;
    let m = yield k+a+b;
    
    yield a+b+k+m;
  
}
let iterator4 = generator3(10,20);

console.log(iterator4.next());
console.log(iterator4.next(50));
console.log(iterator4.next(100));