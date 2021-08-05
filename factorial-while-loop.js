function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

var fisrtfactorial = getFactorial(8);
console.log('First Factorial is: ', fisrtfactorial);



// //another example

function FactorialExmple(num) {
    let fact = 1;
    let i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}

const myFactorial = FactorialExmple(5);
console.log('My factorial is: ', myFactorial);


//factorial finding using decremental loop 
function getFactorialResult(num) {
    let factorial = 1;
    let i = num;
    while (i >= 1) {
        factorial = factorial * i;
        i--;


    }
    return factorial;

}

const myFisrtfactorial = getFactorialResult(7);
console.log('My decremental factorial result is : ', myFisrtfactorial);

//for loop reverse

function factorialResult(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;

    }
    return factorial;
}
const firstFactorialValue = factorialResult(6);
console.log('Reverse loop factorial result is :', firstFactorialValue);