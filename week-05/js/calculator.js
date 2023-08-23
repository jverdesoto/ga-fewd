

// const addingForm = (event) => {
//     event.preventDefault()
//     console.log("Submit was clicked");
//     console.log(hello);
// }

document.getElementById('mySubmit').addEventListener('click', function (event){
    event.preventDefault()
        const numberOne = parseInt(document.getElementById('numberOne').value)
        const numberTwo = parseInt(document.getElementById('numberTwo').value)
    
        document.getElementById('result').innerHTML = addTwonumbers(numberOne, numberTwo)  
})

function addTwonumbers(numberOne, numberTwo) {
    return numberOne + numberTwo 
}

function sayHello(name, age) {
    return `Hello, ${name}. Your age is ${age}`
}

document.getElementById('myGreeting').addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('greeting').innerHTML = sayHello(document.getElementById('name').value, document.getElementById('age').value)
})


console.log(sayHello('Freddie', 30));
console.log(addTwonumbers(5, 7));