// let func = ( arg1, arg2, ..., argN) = > expression;

/* let func = function(arg1,arg2, argN) {
    return XPathExpression;
} */

let sum = (a, b) => a + b;

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
() => alert('Hola') :
() => alert('Saludos');

welcome();

let sum2 = (a, b) => {
    let result = a + b;
    return result;
}