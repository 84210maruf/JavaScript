
let name = "maruf";
console.log("My Name Is "+name);

let firstName = "Maruf";
let lastName = "Hossen";
console.log(firstName+" "+lastName);

// It's Worked
let f = "Maruf";
f = "Hossen";
console.log(f);

// It's not work
// const mean Constant value
const c = 19;
console.log(c);

// Initialization
let name1 = 'Maruf';
let age = 30;
let isApproved = false;
let firstName1 = undefined;
let selectedColor = null;

//...
console.log(typeof(name1));

//...
let person = {
    name:"Maruf",
    age: 26
};
console.log(person);

// Dot Notations
person.name = "john";
console.log(person);

//Bracket Notations
person['name'] = 'mery';
console.log(person);

//...OR
let selection = 'name';
person[selection] = 'harry';
console.log(person['name']);
console.log(person.name);
