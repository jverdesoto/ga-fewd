

// const addingForm = (event) => {
//     event.preventDefault()
//     console.log("Submit was clicked");
//     console.log(hello);
// }

document.getElementById('mySubmit').addEventListener('click', function (event){
    event.preventDefault()
        const numberOne = parseInt(document.getElementById('numberOne').value)
        const numberTwo = parseInt(document.getElementById('numberTwo').value)
        const sign = document.getElementById('sign').value
        document.getElementById('result').innerHTML = calculate(numberOne, numberTwo, sign)  
})

function calculate(numberOne, numberTwo, sign) {
   switch(sign){
    case '+':
        return numberOne + numberTwo
    case '-':
        return numberOne - numberTwo
    case '/':
        if(numberTwo==0){
            return 0
        }
        return numberOne / numberTwo
    case '*':
        return numberOne * numberTwo
    default:
        return 0
   }
    
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