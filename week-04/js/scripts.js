//String
var myString =  "Hello"
console.log(myString);

//Number Int or Float
var myInt = 5
var myFloat = 3.14

//Bool
 var myBool = true

 //Array - Combination of Variables inside a single big variable
 var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(myArr[4]);

var myStrArr = ('hello', 'world', '!', 'my name if Freddie')

//Objects
var myObj = {
    age: 30,
    name: "Freddie",
    surname: 'McNicholas',
    isStudent: true
}
console.log(myObj.name);

for(var i = 0; i<10; i++) {
    console.log(i);
}

var j = 0
 while (j < 10) {
    console.log(  "J var: " + j);
    j++
 }

 var k = 0
 do {
    console.log("K = " + k);
    k++

 } while (k < 10)

 for(var i = 0; i < myStrArr.length; i++) {
    console.log(myStrArr[i]);
 }

 // Two dimensional array
 var my2Darr = [(0,1,2,3),(4,5,6,7),(8,9,10,11)]
 console.log(my2Darr[1][2]);

 // Array of Objects
 var myObjarr = [
    {
        name: "Simon",
        age: 34,
        location: "UK"
    },
    {
        name: "Henry",
        age: 30,
        location: "UK"
    },
    {
        name: "Javi",
        age: 41, 
        location: "Ecuador"
    }
 ]

 for(var i = 0; i < myObjarr.length; i++) {
    console.log(`Your name is ${myObjarr[1].name}`);
    console.log(`Your age is ${myObjarr[1].age}`);
    console.log(`Your location is ${myObjarr[1].location}`);
 } 

 