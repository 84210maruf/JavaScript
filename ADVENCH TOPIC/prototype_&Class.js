////////USE PrOTOTYPE & NEW KEWOrD///////

function Person( name, age ) {

    //No Object Define Process
    this.name = name;
    this.age = age;

    //No return Process
};

Person.prototype = {
    eat(){
        console.log(`Person in eating`);
    },
    sleep(){
        console.log(`person is sleeping`);
    },
    play(){
        console.log(`person is playing`);
    }
};

const naeem = new Person('Naeem',27);
naeem.sleep();

/////////////////////////////////////////
////Same thing using Class & constracto//
///////////////////////////////////////// 

class Person2 {

    constructor(name,age) {
    this.name = name;
    this.age = age;
    }

    eat(){
        console.log(`Person in eating`);
    }
    sleep(){
        console.log(`person is sleeping`);
    }
    play(){
        console.log(`person is playing`);
    }
};

const sumon = new Person2('sumon',27);
sumon.play();

//////////////////////////////////////
////////class prototype//////////////
/////////////////////////////////////

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
const nabil = new P('Nabil',10);
console.log(nabil.age)


////////////////////////////////////////
///SAME with array prototype method////
/////////////////////////////////////

let p = new Array();
////or////
let p1 = [];//array...

console.log(Array.prototype);