// Type Function
var functionExample = function() {
    var a = 5
    return a
}

console.log(functionExample)
// Type Object
var objectExample =  {
    name: "Ngoc Le",
    age: 22,
    nickName: "Le Ngoc",
    method: function() {
        return 9
    }
};
console.log(objectExample.method)
// check type of ...
console.log(typeof objectExample)
console.log(typeof functionExample)
var a = NaN
console.log(typeof null)
var numberOne = 2
var numberTwo = 2