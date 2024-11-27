// Array-Like

let arrayLike = {
  // Tiene indices y longitud => array-Like
  0: "Hola",
  1: "Mundo",
  length: 2,
};

// Array.from Toma un array iterable y crea un array real

let arr = Array.from(arrayLike);
console.log(arr); // Hola Mundo

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

arr = Array.from(range);
console.log(arr);

let arr2 = Array.from(range);

let arr3 = Array.from(range, (num) => num * num);

let str = "Ä0Ä£♦8♠4";
let chars = Array.from(str);

console.log(chars);

// Map y Set coleccion de datos identificados por clave
// key : value

let map = new Map();
map.set('1', 'str1');   // Un String como clave
map.set(1, 'num1');     // Un numero como clave
map.set(true, 'bool1'); // un booleano como clave

/**
 * new Map() crea el mapa
 * map.get(clave) devuelve el valor de la clave
 * map.has(clave) devuelve true si la clave existe en el map
 * map.delete(clave) elimina el elemento con esa clave
 * map.clear elimina todo de map
 * map.size tamaño, devuelve la cantidad actual de elementos
 */

alert( map.get(1) ); // 'num1'
alert( map.get('1') ); // 'str1'
alert( map.size ); // 3
