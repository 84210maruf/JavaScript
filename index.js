
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
var c = 19
console.log(c);

// Initialization
let name1 = 'Maruf';
let age = 30;
let isApproved = false;
let firstName1 = undefined;
let selectedColor = null;

//...
console.log(typeof(selectedColor));

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
console.log(person);

// Array...
let selectedColors = ['red', 'blue'];
selectedColors[2] = person;
console.log(selectedColors);
console.log(selectedColors[2].age)
// Length
console.log(selectedColors.length);

// FUNCTIONS 
// Performing with a Task
function greet(paramiter1, paramiter2){
    console.log(paramiter1+" / "+paramiter2);
}
// Call this functions
greet("Hallow Function");
greet(100);
greet(10.7634);
greet("My Reg. no : ",15163103049);

// Calculate with return functions
function square(num1){
    return num1*num1;
}
let value =  square(100);
console.log(value);


