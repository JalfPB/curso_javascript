/*Crea una función flecha llamada saludar que tome un parámetro nombre y devuelva el mensaje:
"Hola, <nombre>!*/

let saludar = (nombre) => console.log("Hola, " + nombre);

saludar("Alfon");

/*Escribe una función flecha llamada sumar que reciba dos números
 como parámetros y devuelva su suma. */

let sumar = (n1, n2) => console.log(n1 + n2);

sumar(1, 2);

/*
 Escribe una función flecha llamada alCuadrado que tome un número
  como parámetro y devuelva su cuadrado.
 */

let cuadrado = (num) =>
  console.log("El cuadrado de " + num + " es " + num * num);

cuadrado(2);

/*
Crea una función flecha llamada esPar que tome un número como parámetro
 y devuelva true si es par o false si no lo es.
*/

let esPar = (num) => (num % 2 == 0 ? "Par" : "Impar");

let numero = 2;
let numero2 = 3;

console.log(numero + " es par ? " + esPar(numero));
console.log(numero2 + " es par ? " + esPar(numero2));

/**
 * Crea un objeto llamado persona con las siguientes propiedades:
nombre: "Juan"
edad: 25
ciudad: "Madrid"
Muestra sus propiedades en la consola.
 */

let persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Madrid",
};

for (key in persona) {
  console.log(key);
  console.log(persona[key]);
}

/**
 * Usando el objeto persona del ejercicio anterior:
Accede al valor de la propiedad nombre usando la notación de puntos.
Accede al valor de la propiedad ciudad usando la notación de corchetes.
 */

console.log(persona.nombre);
console.log(persona["ciudad"]);

/**
 * Modifica el objeto persona para que:
Cambie el nombre a "Ana".
Cambie la edad a 30.
Añade una nueva propiedad llamada profesión con el valor "Ingeniera".
 */

persona.nombre = "Ana";
console.log(persona.nombre);
persona.edad = 30;
console.log(persona.edad);
persona.profesion = "Ingeniera";
console.log(persona.profesion);

for (key in persona) {
  console.log(key);
  console.log(persona[key]);
}

/**
 * Usando el objeto persona del ejercicio anterior:
Elimina la propiedad ciudad.
Muestra el objeto actualizado en la consola.
 */

delete persona.ciudad;

for (key in persona) {
  console.log(key);
  console.log(persona[key]);
}

/**
 * Crea un objeto llamado coche con las siguientes propiedades:
marca: "Toyota"
modelo: "Corolla"
año: 2020
Usa un bucle for...in para imprimir todas las propiedades y sus valores en la consola.
 */

let coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
};

for (key in coche) {
  console.log(key);
  console.log(coche[key]);
}

/**
 * Crea dos objetos coche1 y coche2 con las siguientes propiedades:
coche1: marca: "Toyota", modelo: "Corolla"
coche2: marca: "Honda", modelo: "Civic"
Escribe una función que reciba dos objetos y devuelva true si tienen las mismas
 propiedades y valores, y false en caso contrario.
 */

let coche1 = {
  marca: "Toyota",
  modelo: "Corolla",
};

let coche2 = {
  marca: "Honda",
  modelo: "Civic",
};

let comprobar = (coche1, coche2) => coche1 === coche2 ? true : false;

console.log(comprobar(coche1,coche2));
