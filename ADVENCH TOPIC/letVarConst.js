//''''VAR VARIABLE'''''''

//Accese in every block
//Not Work UOT Of  FUNCTION BLOCK

var varVariable1 = 'This is var Variable 1';
if(true) {
    //Accece Under the other Block
    console.log(varVariable1);

    var varVariable2 = 'This is var Variable 2';
}
//Accese Out OF The Block
console.log(varVariable2);
// ReDefine var variable
var varVariable1 = 'This is reDefine var veriable 1';
console.log(varVariable1)
//ReAssign
varVariable1 = 'This is reAssign var veriable 1';
console.log(varVariable1)

// ''''LET VERIABLE''''''''
// let only for in block use
//not accese in every block

//Possible Way
let letVeriable1 = 'This is let Veriable 1';
if(true) {
    console.log(letVeriable1);
}

if(true) {
    let letVeriable2 = 'This is the let variable 2'
    console.log(letVeriable2);
}



// reAssign True
let letVeriable4 = 'this is the let verible 4';
letVeriable4 = 'reAssign the let veriable 4';
console.log(letVeriable4);
// reDefine False
// let letVeriable4 = 'reDefine the let veriable 4';
// console.log(letVeriable4);



//''''CONST VErIABLE'''''''
//As same as LET

// CONST Not Possible To reDefine Or reAssign Value

// If CONST variable is object then we Can Change the property....such as-->

const constVeriable = {
    name:'maruf',
    age:26,
    Org:'BUBT'
}
console.log(constVeriable);
//change property...
//Or Update
constVeriable.age = 27;
console.log(constVeriable)