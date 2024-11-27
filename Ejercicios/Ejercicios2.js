/**
 * Crea una función llamada sumar que reciba dos números como parámetros y devuelva su suma.
 */

function sumar(p1, p2) {
  return p1 + p2;
}

/**
 * Escribe una función llamada calcularAreaTriangulo
 *  que calcule el área de un triángulo dado su base y su altura.
 */

function calcularArea(base, altura) {
  return (base * altura) / 2;
}

let area = calcularArea(4, 5);
console.log(area);

/**
 * Crea una función llamada esPar que reciba un número como parámetro
 *  y devuelva true si es par y false si es impar.
 */

function esPar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(2));
console.log(esPar(3));

/**
 * Escribe una función llamada celsiusAFahrenheit que convierta grados Celsius a Fahrenheit.
 */

function celsiusAFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(
    celsius + " grados celsius son: " + fahrenheit + " grados Fahrenheit"
  );
}

console.log(celsiusAFahrenheit(30));

/**
 * Escribe una función llamada maximoDeTres que reciba tres números y devuelva el mayor de ellos.
 */

function maximoDeTres(num1, num2, num3) {
    let mayor = (num1 >= num2 && num1 >= num3) ? num1 : 
            (num2 >= num1 && num2 >= num3) ? num2 : num3;
    return mayor;
}

console.log(maximoDeTres(1,2,3));

/**
 * Crea una función llamada factorial que calcule el factorial de un número.
 */

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
console.log( factorial(5) );

/**
 * Crea una función llamada numeroAleatorio que genere un número aleatorio
 *  entre dos valores dados (mínimo y máximo).
 */

function numeroAleatorio(principio, fin){
    let num = Math.floor(Math.random() * (fin - principio) + principio);
    return num;
}

console.log(numeroAleatorio(5,27));

/**
 * Escribe una función llamada aplicarOperacion que reciba dos números
 *  y una función como parámetros. La función debe aplicar la operación
 *  (suma, resta, multiplicación, etc.) pasada como argumento.
 */
function sumar(p1, p2) {
    return p1 + p2;
  }

function aplicarOperacion(num1,num2,operacion){
    console.log(operacion(num1,num2));
}

aplicarOperacion(1,2,sumar);

/**
 * Escribe una función llamada fibonacci que reciba un número n y
 * devuelva un array con los primeros n números de la serie de Fibonacci.
 */

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

console.log(fib(10));

