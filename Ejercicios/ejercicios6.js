/**
 * Crea un constructor llamado Persona que reciba un nombre
 *  y una edad como parámetros. Agrega un método llamado
 *  saludar que imprima un mensaje como "Hola, mi nombre es
 *  Juan y tengo 25 años."
 */

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  };
}

let alfon = new Persona("Alfon", 23);
alfon.saludar();

/**
 * Utilizando el constructor anterior, crea un objeto e itera sobre
 *  sus propiedades utilizando for...in.
 */

for (propiedad in alfon) {
  console.log(propiedad);
}

/**
 * Crea un objeto Equipo que represente un equipo de futbol.
 *  Agrega un método que permita iterar sobre los jugadores
 *  usando Symbol.iterator.
 */

let equipo = {
  jugadores: [alfon, new Persona("Messi", 45)],
  [Symbol.iterator]: function () {
    let index = 0;
    let jugadores = this.jugadores;
    return {
      next: function () {
        if (index < jugadores.length) {
          return { value: jugadores[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

let iterador = equipo[Symbol.iterator]();

while (true) {
  let result = iterador.next();
  if (result.done) break;
  console.log(result.value);
}

/**
 * Implementa un constructor Coche que reciba una marca y un modelo,
 * y un método detalles que los muestre. Luego, usa un bucle for...in
 *  para imprimir todas las propiedades del coche.
 */

function Coche(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;

  this.mostrar = function () {
    console.log(
      `Los detalles del coche son marca: ${this.marca}, modelo: ${this.modelo}.`
    );
  };
}

let coche2 = new Coche("Peugeot", "206");

for (propiedad in coche2) {
  console.log(propiedad);
}

/**
 * Crea un objeto Contador que sea iterable y permita contar del 1 al 5.
 */

let contador = {
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

for (let num of contador) {
  alert(num);
}

/**
 * Crea una función constructora Animal con una propiedad especie
 *  y un método hablar. Usa for...in para iterar sobre las
 *  propiedades del objeto.
 */

function Animal(especie) {
  this.especie = especie;

  let hablar = function () {
    console.log("Hola");
  };
}

let animal = new Animal("Perro");

for (propiedad in animal) {
  console.log(propiedad);
}

/**
 * Crea un objeto NumerosPares que sea iterable y genere los primeros 10 números pares.
 */

let numerosPares = {
  from: 1,
  to: 20,
  current: 2,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.current <= this.to) {
      let value = this.current;
      this.current += 2;
      return { done: false, value: value };
    } else {
      return { done: true };
    }
  },
};

for (let num of numerosPares) {
  console.log(num);
}

function crearIteradorPares(cantidad) {
  return {
    current: 2,
    cont: 0,
    cantidad: cantidad,
    
    [Symbol.iterator]() {
      return this;
    },
    
    next() {
      if (this.cont < this.cantidad) {
        let value = this.current;
        this.current += 2;
        this.cont++;
        return { done: false, value: value };
      } else {
        return { done: true };
      }
    },
  };
}

let numerosPares = crearIteradorPares(10);

for (let num of primerosPares) {
  console.log(num);
}

/**
 * Crea una clase Frutas que contenga una lista de frutas y sea iterable.
 */

function Frutas() {
    this.lista = ["manzana", "platano", "pera"];
    this.current = 0; 

    this[Symbol.iterator] = function () {
      return this;
    };
  

    this.next = function () {
      if (this.current < this.lista.length) {
        return { done: false, value: this.lista[this.current++] };
      } else {
        return { done: true };
      }
    };
  }
  
  const frutas = new Frutas();
  
  for (let fruta of frutas) {
    console.log(fruta);
  }
  