// primetive data...//immuted
// String
// Number 
// Null
// Undefind
// boolian
// Symbol

///////////////////////////////
var a = 'MARUF';
console.log(a.charAt(2));


// Referance Data...
// Object
// Function
// //////////////////////////////////////
var person = {
    name:"Shakib",
    age: 35,
    type:"all_roounder"
};

var player = person;

person={};

console.log(person);
console.log(player);
console.log('///////////////////////////////')

////////////////////////////////////////
var person2 = {
    name:"Shakib",
    age: 35,
    type:"all_roounder"
};

var player2 = {...person2} // immutedly

person2.status = "Active";

console.log(person2);
console.log(player2);
console.log('/////////////////////////');
/////////////////////////////////////////
var person3 = {
    name:"Maruf",
    age: 35,
    type:"Developer",
    libraries: ['react','vue','JQuary']
};

var player3 = {...person3};

person3.libraries.push("Angular");

console.log(person3);
console.log(player3);
console.log('/////////////////////////////');

/////////////////////////////////////////
var person4 = {
    name:"Maruf",
    age: 35,
    type:"Developer",
    libraries: ['react','vue','JQuary']
};
// use Lodash for immutedly copying..
var player4 = _.cloneDeep(person4);

person4.libraries.push("Angular");

console.log(person4);
console.log(player4);
console.log('/////////////////////////////');