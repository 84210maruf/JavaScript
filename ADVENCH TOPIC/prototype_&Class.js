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
/////// Same thing using Class///////////
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
////////////////////////////////////////
///SAME with array prototype method////
/////////////////////////////////////

let p = new Array();
////or////
let p1 = [];//array...

console.log(Array.prototype);