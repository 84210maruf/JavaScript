console.log(a);

var a = 'Bangladesh';
console.log(a);

// Confusing Output with var

var LANGUAGE = 'java';
var language = 'javascript';

function getLanguage(){
    if(!language) {
        var language = LANGUAGE;
    }
    return language;
}
console.log('I Love ' + getLanguage());

// Solved Output with const

const LANGUAGEs = 'java';
const languages = 'javascript';

function getLanguages(){
    if(!languages) {
        const languages = LANGUAGEs;
    }
    return languages;
}
console.log('I Love '+getLanguages());

// Solved Output with let
let LANGUAGEss = 'java';
let languagess = 'javascript';

function getLanguagess(){
    if(!languagess) {
        let languagess = LANGUAGEss;
    }
    return languagess;
}
console.log('I Love '+getLanguagess());


//Diffrent Think with Hoisting..

// its work
myFunc();
function myFunc() {
    var lng = 'JS';
    console.log(lng);
}
//also work..
function myFunc2() {
    lng = 'python';
    var lng;
    console.log(lng);
}
myFunc2();