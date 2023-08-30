
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

function addTwoNumbers(input1, input2) {
    const numOne = parseInt(input1);
    const numTwo = parseInt(input2);
    const sum = numOne + numTwo;
    document.getElementById('answer').innerHTML = sum;
    
    //const resultElement = document.getElementById(resultElementId);
   //resultElement.innerHTML = numOne + numTwo;
}


document.getElementById("mySubmit").addEventListener('click', function(event) {
    event.preventDefault();
    
    const numOneInput = document.getElementById('numOne');
    const numTwoInput = document.getElementById('numTwo');
    
    addTwoNumbers(numOneInput.value, numTwoInput.value);

});

function subtractTwoNumbers(input3, input4) {
    const numThree = parseInt(input3);
    const numFour = parseInt(input4);
    const sum = numThree - numFour;
    document.getElementById('answer2').innerHTML = sum;
}


document.getElementById("mySubmit1").addEventListener('click', function(event) {
    event.preventDefault();
    
    const numThreeInput = document.getElementById('numThree');
    const numFourInput = document.getElementById('numFour');
    
    subtractTwoNumbers(numThreeInput.value, numFourInput.value);

});

function multiplyTwoNumbers(input5, input6) {
    const numFive = parseInt(input5);
    const numSix = parseInt(input6);
    const sum = numFive * numSix;
    document.getElementById('answer3').innerHTML = sum;
}


document.getElementById("mySubmit2").addEventListener('click', function(event) {
    event.preventDefault();
    
    const numFiveInput = document.getElementById('numFive');
    const numSixInput = document.getElementById('numSix');
    
    multiplyTwoNumbers(numFiveInput.value, numSixInput.value);

});

function divideTwoNumbers(input7, input8) {
    if (input8 === "0") {
        throw new Error('Error: Division by zero is not allowed.');
    }
    const numSeven = parseInt(input7);
    const numEight = parseInt(input8);
    const sum = numSeven / numEight;
    document.getElementById('answer4').innerHTML = sum;
    document.getElementById('errorDiv').innerHTML = "";
}


document.getElementById("mySubmit3").addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('errorDiv').innerHTML = "";
    const numSevenInput = document.getElementById('numSeven');
    const numEightInput = document.getElementById('numEight');

    try {
        divideTwoNumbers(numSevenInput.value, numEightInput.value);
    } catch (e) {
        document.getElementById('errorDiv').innerHTML = e.message;  // Display the error message
    }

});




//function sayHello(name, age) {
    //return `Hello, ${name}, Your age is${age}`
//}

//document.getElementById('myGreeting').addEventListener('click', function (e) {
   // e.preventDefault()
   // document.getElementById('greeting').innerHTML = sayHello(document.getElementById('name').value, document.getElementById('age').value)
//})

