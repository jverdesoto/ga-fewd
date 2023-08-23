// const hello = 'hello'
// let helloToo = 'Hello too'


// const addingForm = (event) => {
//     event.preventDefault()
//     console.log('Submit was clicked');
//     console.log(hello);
// }

// document.getElementById('mySubmit').addEventListener('click', addTwoNumbers)

// function addTwoNumbers(event) {
//     event.preventDefault()
//     const numOne = parseInt(document.getElementById('numOne').value)
//     const numTwo = parseInt(document.getElementById('numTwo').value)
   
//     document.getElementById('result').innerHTML = numOne + numTwo
// }

function addTwoNumbers (numOne, numTwo) {
    return numOne + numTwo
}

document.getElementById('mySubmit').addEventListener('click', (e) => {
    e.preventDefault
    document.getElementById('result').innerHTML = addTwoNumbers(parseInt(document.getElementById('numOne').value), parseInt(document.getElementById('numTwo').value))
})

console.log(addTwoNumbers(2,5));

function sayHello(name, age) {
    return `Hello, ${name}, Your age is ${age}`
}

document.getElementById('myGreeting').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('greeting').innerHTML = sayHello(document.getElementById('name').value, document.getElementById('age').value)
})
