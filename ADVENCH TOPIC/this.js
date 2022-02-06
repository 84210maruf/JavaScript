///////////////////////////////////////
/////////// Implicit binding///////////
///////////////////////////////////////

var printPlyerNameFunc = function(obj) {
    obj.printPlyerName = function(){
        console.log(`${this.name}`);
    }
}

var shakib = {
    name: "shakib",
    age:35,
}

printPlyerNameFunc(shakib);
shakib.printPlyerName();

//////////////////////////////////
var Person = function(name,age){

    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        }
    }
}

var tamim = Person('tamim',35);
tamim.printName();

//////////////////////////////////
var Person2 = function(name,age){

    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        },
        father: {
            name:'Mr. YY',
            printName: function(){
                console.log(this.name);
            },
        },
    };
};

var rubel = Person2('rubel',35);
rubel.father.printName();

//////////////////////////////////////
/////////Explicit Binding////////////
////////////////call()..//////////////

var printName = function() {
    console.log(this.name);
}

var musfiq = {
    name: 'Musfiq',
    age:34,
};

printName.call(musfiq);



///////////////Apply()////////////////

var printName2 = function(v1,v2,v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
}

var masum = {
    name: 'masum',
    age:34,
};
var v1 = 'handsome';
var v2 = 'toll';
var v3 = 'Best ply';
var v = [v1,v2,v3];

printName2.apply(masum,v);

///////////////bind()////////////////
var printName3 = function(v1,v2,v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
}

var masum = {
    name: 'masum',
    age:34,
};
var v1 = 'handsome';
var v2 = 'toll';
var v3 = 'Best ply';
var v = [v1,v2,v3];

var newFunc =  printName3.bind(masum,v1,v2,v3);
newFunc();
