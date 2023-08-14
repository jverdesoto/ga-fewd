var myString = "Hello"

console.log(myString);

var myInt = 5
var MyFloat = 3.14
console.log(myInt);
console.log(MyFloat)

var myBool = true
console.log(myBool);

var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(myArr);
console.log(myArr[4]);

var myStrArr = ['hello','World', '!', 'my name is Simon'];
console.log(myStrArr)

var myObj = {
    age: 34,
    name: "Simon",
    surname: "Hearn",
    isStudent: true
}
console.log(myObj);
console.log (myObj.name);

for(var i = 10; i >=0; i-- ) {
    console.log(i);
}

var s = 0
while(s < 10){
    console.log("S var: " + s);
    s++
}

var k = 0
do {
    console.group("k=" + k);
    k++
} while (s < 10)

for (var i=0; i < myStrArr.length; i++) {
    console.log(myStrArr[i]);
}

var myObjArr= [
    {
        name: "Simon",
        age: 41,
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

for(var i = 0;i < myObjArr.length; i++) {
    console.log (`Your name is ${myObjArr[i].name}`)
    console.log (`Your age is ${myObjArr[i].name}`)
    console.log (`Your location is ${myObjArr[i].name}`)
}