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

document.getElementById('addSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('addResult').innerHTML = addTwoNumbers(parseInt(document.getElementById('numOne').value), parseInt(document.getElementById('numTwo').value))
})

function subtractTwoNumbers (numThree, numFour) {
    return numThree - numFour
}

document.getElementById('subtractSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('subtractResult').innerHTML = subtractTwoNumbers(parseInt(document.getElementById('numThree').value), parseInt(document.getElementById('numFour').value))
})

function multiplyTwoNumbers (numFive, numSix) {
    return numFive * numSix
}

document.getElementById('multiplySubmit').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('multiplyResult').innerHTML = multiplyTwoNumbers(parseInt(document.getElementById('numFive').value), parseInt(document.getElementById('numSix').value))
})

function divideTwoNumbers (numSeven, numEight) {
    if (numEight !== 0) {
        return numSeven / numEight
    } else {
        return "Cannot divide by zero";
    }
    
}

document.getElementById('divideSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('divideResult').innerHTML = divideTwoNumbers(parseInt(document.getElementById('numSeven').value), parseInt(document.getElementById('numEight').value))
})

document.getElementById('calculateSubmit').addEventListener('click', (e) => {
    e.preventDefault();

    const numNine = parseInt(document.getElementById('numNine').value);
    const numTen = parseInt(document.getElementById('numTen').value);
    const operator = document.getElementById('operator').value;

    let result;

    if (operator === 'Add') {
        result = numNine + numTen;
    } else if (operator === 'Subtract') {
        result = numNine - numTen;
    } else if (operator === 'Multiply') {
        result = numNine * numTen;
    } else if (operator === 'Divide') {
        if (numTen !== 0) {
            result = numNine / numTen
        } else {
            result = "Cannot divide by zero";
        }
    }

    document.getElementById('calculateResult').innerHTML = result;
});
    


console.log(addTwoNumbers(2,5));

function sayHello(name, age) {
    return `Hello, ${name}, Your age is ${age}`
}

document.getElementById('myGreeting').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('greeting').innerHTML = sayHello(document.getElementById('name').value, document.getElementById('age').value)
})
