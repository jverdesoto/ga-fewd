var myString = "Hello"
console.log(myString);

var myInt = 5
var myFloat = 3.14
console.log(myInt);
console.log(myFloat);

var myBool = true
console.log(myBool);

var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(myArr);
console.log(myArr[4]);

var myStrArr = ['hello', 'world', '!', 'my name is Henry']
console.log(myStrArr);

var myBoolArr = [true, true, false, false, true]
console.log(myBoolArr);

var myObj = {
    age: 41, 
    name: 'Javi',
    surname: 'Verdesoto',
    isTeacher: true
}
console.log(myObj);
console.log(myObj.name);

for(var i = 10; i >= 0; i--) {
    console.log(i);
}

var j = 0
while(j < 10) {
    console.log("J var: " + j);
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

var my2Darr = [[0,1,2,3],[4,5,6,7],[8,9,10,11]]
console.log(my2Darr[1][2]);

var myObjArr = [
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

for(var i = 0; i < myObjArr.length; i++) {
    console.log(`Your name is ${myObjArr[i].name}`);
    console.log(`Your age is ${myObjArr[i].age}`);
    console.log(`Your location is ${myObjArr[i].location}`);
}