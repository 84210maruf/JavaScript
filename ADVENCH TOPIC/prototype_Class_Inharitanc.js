///////////inhartanc//////////

//  Parent Function  //
function P(name,age){
    this.name=name;
    this.age=age;
}

P.prototype = {
    eat: function() {
        console.log(`${this.name} is eating`)
    },
    age: function() {
        console.log(`${this.age} years old`)
    }
}

////inharite P in C/////////
///P Direct Linked With C///
/////C is child function///////
function C(name,age,type,country) {
    P.call(this);
    this.type = type;
    this.country = country;
    this.name=name;
    this.age=age;
}
//also inharit prototype
C.prototype = Object.create(P.prototype);
P.prototype.constractor = C;

//add prototype with child
C.prototype.play = function() {
        console.log(`${this.name} is playing.`)
}

const nabil = new C('Nabil',10,'A','BD');
nabil.play();


//////////////////////////////////////
/////////////////////////////////////
////Same work with just class////////
/////////////////////////////////////
////////////////////////////////////

class PP{
    // Parent Class
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    eat() {
        console.log(`${this.name} is eating`)
    }
    age() {
        console.log(`${this.age} years old`)
    }
}

class CC extends PP{
    // Child Class
    
    constructor(name,age,type,country) {
        super(name,age);
        this.type = type;
        this.country = country;
        this.name=name;
        this.age=age;
    }
    play() {
        console.log(`${this.name} is playing.`)
    }

}
const shakib = new CC('shakib',35,'all','BD');
shakib.eat();