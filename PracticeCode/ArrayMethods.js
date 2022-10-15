
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("numbers is : "+numbers);

// filter Methods
const fil = numbers.filter((num) => num>3);
console.log(fil);


//Find Methods
// find a element that emidiate bigger of 2
const fi = numbers.find((num) => num>5);
console.log("Imidiate seneor of 5 is : "+fi);

//findIndex Methods
//find aIndex of the element that emidiate bigger of 2
const fiInd = numbers.findIndex((num) => num>2);
console.log("Index No :"+fiInd);

//slice Method
//slice from any where from array
const sls = numbers.slice(3,6);
const sls2 = numbers.slice(7);
console.log("slice data from numbers :"+sls);
console.log("slice 7 : "+sls2);

// concat Method
// Main array not changed
const con = numbers.concat(11,12,13,14);
console.log("After concat numbers value :"+con);


// splice Method
// Its chenge the main array element
//(from index,delete which element,adding element(not mandetory))
const spl = numbers.splice(2,3,[2,3]);
console.log('const spl = numbers.splice(2,3,[2,3]); ', spl);

console.log(numbers.length);

const spl2 = numbers.splice(1, 2);

console.log('const spl2 = numbers.splice(1,2); ',spl2);
console.log(numbers);

// push Methods
//It's Also change main array elements
//After adding element its return total lenght of array
const p = numbers.push(100,200);
console.log(numbers);
console.log("Lenght of array is : "+p);

//map Method
//Access all the element of array
//Main array not changed
const m = numbers.map((num) =>{
    return num*2;
});
console.log(m);

