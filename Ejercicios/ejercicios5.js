/**
 * Escribe una función tienePropiedad(obj, prop) que reciba un objeto y el nombre
 *  de una propiedad como argumentos, y devuelva true si el objeto tiene esa propiedad
 *  y false en caso contrario.
 * Crea un objeto libro, con las siguientes propiedades: Titulo, autor y páginas.
 * Comprueba la función con el objeto libro.
 */

let libro = {
    titulo: "",
    autor: "",
    paginas: 10
}

let tienePropiedad = (obj, prop) => (obj.hasOwnProperty(prop) ? true : false);
console.log("El libro tiene titulo? " + tienePropiedad(libro, "titulo"));
console.log("El objeto tiene isbn? " + tienePropiedad(libro, "isbn"));

/**
 * Crea una función contarPropiedades(obj) que reciba un objeto y
 *  devuelva el número de propiedades que tiene.
 * Prueba la función con el siguiente objeto:
 *  const coche = { marca: "Toyota", modelo: "Corolla", año: 2020 }
 */

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
};

let contarPropiedades = (obj) => {
  let contador = 0;
  for (key in coche) {
    contador++;
  }
  return contador;
};

console.log("El objeto tiene: " + contarPropiedades(coche) + " propiedades");

/**
 * Crea un array llamado mascotas que contenga tres objetos,
 *  cada uno representando una mascota con las propiedades
 *  nombre y tipo (perro, gato, etc.).
 * Recorre el array e imprime en consola el nombre de cada mascota.
 */

let mascota1 = {
  nombre: "Toby",
  tipo: "Perro",
};

let mascota2 = {
  nombre: "Max",
  tipo: "Gato",
};

let mascota3 = {
  nombre: "Jerry",
  tipo: "Raton",
};

let mascotas = [mascota1, mascota2, mascota3];

mascotas.forEach((mascota) => console.log(mascota.nombre));

/**
 * Dado el siguiente array de objetos:
 *  const productos = [ { nombre: "Laptop", precio: 800 },
 *  { nombre: "Teclado", precio: 30 },
 *  { nombre: "Mouse", precio: 20 },
 *  { nombre: "Monitor", precio: 150 } ];
 * Escribe un programa que devuelva un nuevo array con los productos que cuesten más de 50.
 *
 */

const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Teclado", precio: 30 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Monitor", precio: 150 },
];

const productosNuevo = [];

productos.forEach((producto) => {
  if (producto.precio > 50) {
    console.log(producto.nombre);
    productosNuevo.push(producto)
  }
});

/**
 * Crea un objeto llamado universidad que contenga:
 * Una propiedad nombre (string)
 * Una propiedad ubicacion (string)
 * Una propiedad facultades, que sea un array de objetos con las propiedades
 *  nombre (string) y numeroEstudiantes (número).
 * Imprime en consola cuántos estudiantes tiene la primera facultad.
 */

let universidad = {
    nombre: "UCM",
    ubicacion: "Cáceres",
    facultades: [
        {
            nombre: "Veterinaria",
            numeroEstudiantes: 10
        },
        {
            nombre: "Informatica",
            numeroEstudiantes: 24
        }
    ]
}

console.log("La primera facultad tiene: " + universidad.facultades[0].numeroEstudiantes + " estudiantes.");

/**
 * Dado dos objetos:
 * const usuario1 = { nombre: "Ana", edad: 25 };
 * const usuario2 = { ciudad: "Barcelona", pais: "España" };
 * Combínalos en un nuevo objeto llamado usuarioCompleto.
 */

const usuario1 = { nombre: "Ana", edad: 25 };
const usuario2 = { ciudad: "Barcelona", pais: "España" };

const usuarioCompleto = {...usuario1, ...usuario2};

console.log(usuarioCompleto);