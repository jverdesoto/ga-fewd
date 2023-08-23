// const addingForm = (event) => {
//     event.preventDefault()
//     console.log("Submit was clicked");
//     console.log(hello);
// }

document.getElementById('mySubmit').addEventListener('click', function (event){
    event.preventDefault()
    const numbOne = parseInt(document.getElementById('numOne').value)
    const numbTwo = parseInt(document.getElementById('numTwo').value)

    document.getElementById('result').innerHTML = addTwoNumbers(numbOne, numbTwo)
})

function addTwoNumbers(numbOne, numbTwo) {
    return numbOne + numbTwo
}

function sayHello(name, age) {
    return `Hello, ${name}. Your age is ${age}`
}

document.getElementById('myGreeting').addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('greeting').innerHTML = sayHello(document.getElementById('name').value, document.getElementById('age').value)
})

console.log(sayHello('Freddie', 30));

console.log(addTwoNumbers(5,7))