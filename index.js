var c = 19
var c = 20 //redecleared
console.log(c);

var z = 19
z = 20  //reasigned
console.log(z)


let name0 = "maruf";
name0 = 'hjbhjb' //just reasigned
console.log("My Name Is "+name0);

let firstName = "Maruf";
let lastName = "Hossen";
console.log(firstName+" "+lastName);



// Initialization
let name1 = 'Maruf';
let age = 30.;
let isApproved = false;
let firstName1 = undefined;
let selectedColor = null;
let arry = ["Saab", "Volvo", "BMW"]

//...
console.log(typeof(arry));

//...object
const person = {
    name:"Maruf",
    age: {
        n:10,
        x:20
    }
};
console.log(person);

// Dot Notations
person.name = "john"; 
console.log(person);

console.log(person.age);

//Bracket Notations

//...OR
person['age'] = 30;
let selection = 'name';
person[selection] = person;
console.log(person);

// Array...
let selectedColors = ['red', 'blue'];
selectedColors[2] = 10;
selectedColors[3] = person;
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


