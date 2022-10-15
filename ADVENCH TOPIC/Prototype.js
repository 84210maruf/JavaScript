//////////Global Scoop///////////////

let person = {};

person.name = "Zayan";
person.age = 20;
person.eat = function(){
    console.log(`person is eating`);
}

console.log(person.eat());

//////////////Functional Scoop///////////////

function plyer1(){
//  Object Define
    let person = {};

//  Add property
    person.name = "Zayan";
    person.age = 20;
    person.eat = function(){
        console.log(`person is eating`);
    }
    person.sleep = function(){
        console.log(`person is sleeping`);
    }
    return person;
}
console.log(plyer1());

///////////////other Way/////////////////


const plyerStatus = {

    eat(){
        console.log(`person is eating`);
    },
    sleep(){
        console.log(`person is sleeping`);
    }

}

function plyer2(){
//  Object Define
    let person = {};

//  Add property
    person.name = "Zayan";
    person.age = 20;
    person.eat = plyerStatus.eat;
    person.sleep = plyerStatus.sleep;
    
    return person;
}
const pl = plyer2();
pl.sleep();


///////////////other Way/////////////////
// use object.ceate() 

const plyerMethods = {

    
    eat(){
        console.log(`person is eating`);
    },
    sleep(){
        console.log(`person is sleeping`);
    },
    ply(){
        console.log(`person is plying`);
    }

}

function plyer3(){
//  Object Define
    let person = Object.create(plyerMethods);

//  Add property
    person.name = "Zayan";
    person.age = 20;
    // person.eat = person.eat;
    // person.sleep = person.sleep;
    // person.ply = person.ply;
    
    return person;
}
const ply = plyer3();
ply.ply();

///////////////other Way/////////////////
// use object.create() 
// use prototype
// prtotype is an builtin property of any object

function plyer4(){
    //  Object Define
    let person = Object.create(plyer4.prototype);
    
    //  Add property
    person.name = "Zayan";
    person.age = 20;
    
    return person;
}

plyer4.prototype = {
    eat(){
        console.log(`person is eating`);
    },
    sleep(){
        console.log(`person is sleeping`);
    },
    ply(){
        console.log(`person is plying`);
    }
}

const ply4 = plyer4();
ply4.eat();