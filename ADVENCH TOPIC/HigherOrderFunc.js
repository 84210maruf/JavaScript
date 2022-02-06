var numbers = [1, 2, 3, 4, 5, 6];

var result = numbers.map(function (number) {
    //console.log(number);
    return number * 10;
});
console.log(result);

var plyers = [
    {
        name: "masrafi",
        avg: 30,
    },
    {
        name: "sakib",
        avg: 35,
    },
    {
        name: "musfiq",
        avg: 33,
    },
];

var thirtyUpAvg = plyers.filter((plyer) => plyer.avg > 30);

thirtyUpAvg.map((plyer) => console.log(plyer.name));
///////////////////////////////////////////

const languages = ["javaScript", "java", "C++", "Python", "C", "Dart"];

function languageLen(arr, func) {
    var lngLenArr = [];

    for (let i = 0; i < arr.lenght; i++) {
        lngLenArr.push(func(arr[i]));
    }
    return lngLenArr;
}
const lngLen = languageLen(languages, function (language) {
    return language.lenght;
});

console.log(lngLen);
