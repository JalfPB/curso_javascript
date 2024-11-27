let nombre = "Alfon",
  edad = 23,
  mensaje = "Hola";

const NOMBRE = "Alfon";
NOMBRE = "Hola";

let edad2 = null;

let boleano = true;
let boleano2 = false;

// let otro = prompt(title, [default]);
let edad3 = prompt("Pon tu edad", 100);
alert(`Tienes ${edad3} años`);

// Confirm
let pregunta = confirm("Si o no");

// Conversion
let variable = true;
alert(typeof variable); // boolean
let variable2 = String(variable); // "true"
alert(typeof variable2);

let str = "123";
let num = Number(str);

/*
    Reglas de conversion numerica:
    undefined -> NaN
    null -> 0
    True -> 1
    false -> 0
    String(Solo si son numeros) -> numeros
 */

alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("Hola")); // true
alert(Boolean("")); // false

// Operadores matematicos

let x = 1;
let y = 4;
alert(x ** y);

let peras = 2;
let manzanas = "3";
alert(manzanas + peras); // 23
alert(+manzanas + peras); // 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

alert(a);
alert(c);

let a2 = 0;
alert(Boolean(a2));

let b2 = "0";

alert(0 === false); // true
alert("" === false); // true

let año = prompt("En que año fue 1+1?", 0);
if (año == 2) {
  alert("Correcto");
  alert("Aunque esperaba yo me llamo Ralph");
} else if (año == "Yo me llamo Ralph") {
  alert("Correcto");
} else {
  alert("No");
}

// Operador ternario

let age = prompt("Edad?", 18);
let message =
  age < 3
    ? "Hola bebe!"
    : age < 18
    ? "Hola!"
    : age < 100
    ? "Fwlicidades!"
    : "Que edad tan inusual!";

alert(message);

let company = prompt("¿Que compañia creo javascript?", "");

company == "Netscape" ? alert("¡!Correcto") : alert("Equivocado.");

// OR:
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

// AND:
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

//Nullish Coalescing:
let result;
result = a !== null && a !== undefined ? a : b;

result = a ?? b;

let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

// Muestra el primer valor definido
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // supercoder

let height = null;
let width = null;

// Importante usar parentesis
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000;

// While

/**
 * while(condition){
 * codigo
 * }
 */

let i = 0;
while (i < 3) {
  alert(i);
  i++;
}

/**
 * do...while
 *
 * do {
 *  cuerpo del bucle
 * }while (condition)
 */

i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

// for

for (let i = 0; i < 3; i++) {
  alert(i);
}

/**
 * switch
 */

a = 2 + 2;

switch (a) {
  case 3:
    alert("Muy pequeño");
    break;
  case 4:
    alert("Exacto!");
    break;
  case 5:
    alert("Muy grande");
    break;
  default:
    alert("Desconozco estos valores");
    break;
}

// Arrays

let frutas = ["manzana", "banana", "cereza"];
let numeros = new Array(1, 2, 3, 4, 5);
let vacio = new Array(5); // En este caso cada una de las posiciones
// sera undefined

console.log(frutas[0]);
console.log(frutas[5]); // Undefined

// push Agrega uno o mas elementos al final del array
frutas.push("cereza");

// pop() elimina el ultimo elemento del array y lo devuelve
let eliminado = frutas.pop();
console.log(eliminado);

// shift() Elimina el primer elemento del array y lo devuelve
eliminado = frutas.shift();
console.log(eliminado);

// unshift() Agrega uno o mas elementos al inicio del array
frutas.unshift("Manzana");
console.log(frutas);

// splice() Permite agregar y eliminar elementos en cualwuier posicion del
// array
/*
 *El primer parametro es el indice donde empezar
 * El segundo parametro es cuantos elementos eliminar
 * los siguientes parametros son los elementos que quieres agregar
 */

frutas.splice(1, 1, "kiwi", "pera");
// Elimina 1 elemento en el indice 1 y agrega kiwi y pera

// slice() Devuelve una copia superficial de una porcion del array en un
//  nuevo array

let algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); // ["banana","cereza"]

//forEach(): Ejecuta una funcion sobre cada elemento del array
Array.array.forEach((element) => {
  // cuerpo de la funcion
});

frutas.forEach(function (fruta) {
  console.log(fruta);
});

frutas.forEach(function (fruta, indice, array) {
  console.log(
    `${fruta} es el elemento en el indice ${indice} del array: ${array}`
  );
});
