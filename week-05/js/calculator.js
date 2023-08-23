
//const addingForm = (event) => {
//    event.preventDefault()
//}

//document.getElementById("mySubmit").addEventListener('click', addTwoNumbers)

//function addTwoNumbers(event) {
   // event.preventDefault()
   // const numOne = document.getElementById('numOne').value
   // const numTwo = document.getElementById('numTwo').value

   // document.getElementById('result').innerHTML = numOne + numTwo
//}

function addTwoNumbers(input1, input2, resultElementId) {
    const numOne = parseInt(input1);
    const numTwo = parseInt(input2);
    
    const resultElement = document.getElementById(resultElementId);
    resultElement.innerHTML = numOne + numTwo;
}


document.getElementById("mySubmit").addEventListener('click', function(event) {
    event.preventDefault();
    
    const numOneInput = document.getElementById('numOne');
    const numTwoInput = document.getElementById('numTwo');
    const resultElementId = 'result';
    
    addTwoNumbers(numOneInput.value, numTwoInput.value, resultElementId);

});


function sayHello(name, age) {
    return `Hello, ${name}, Your age is${age}`
}

document.getElementById('myGreeting').addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('greeting').innerHTML = sayHello(document.getElementById('name').value, document.getElementById('age').value)
})