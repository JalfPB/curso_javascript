/**
 * Escribe una función llamada contarPares que reciba
 *  un array de números y devuelva la cantidad de números
 *  pares que contiene. Utiliza el método forEach para
 *  resolverlo.
 */

function contarPares(array) {
  array.forEach((element) => {
    if (element % 2 == 0) {
      console.log(element);
    }
  });
}

let numeros = [1, 2, 3, 4, 5, 6];

contarPares(numeros);

/**
 * Escribe una función llamada invertirArray que reciba un array
 *  y devuelva uno nuevo con los elementos en orden inverso. No
 *  uses el método reverse.
 */
function invertirArray(array) {
  let resultado = [];
  for (let i = array.length - 1; i >= 0; i--) {
    resultado.push(array[i]);
  }
  return resultado;
}

console.log(invertirArray(numeros));

/**
 * Crea una función llamada calcularPromedio que reciba un array de números
 *  y devuelva su promedio. Asegúrate de manejar el caso en el que el array
 *  esté vacío devolviendo null.
 */
let promedio = 0;
function calcularPromedio(array) {
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      promedio = array[i] + promedio;
    }
    promedio = promedio / array.length;
    return promedio;
  } else {
    return null;
  }
}

console.log(calcularPromedio(numeros));

/**
 * Crea una función recursiva llamada sumarArray que reciba
 *  un array de números y devuelva la suma de sus elementos.
 */

function sumarArray(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + sumarArray(array.slice(1));
    }
}

console.log(sumarArray(numeros));
