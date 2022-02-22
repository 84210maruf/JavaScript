// String..[iterable]

let BD = 'Bangladash';
for(let element of BD){
    console.log(element);
}

//array iterator[Iterable]
let array = ['Am','Jam','Kathal','Lichu'];

for(let element of array){
    console.log(element);
}

let iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().value);

// Objects....