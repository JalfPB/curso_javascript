/**
 * Imprimir números pares del 1 al 100
Escribe un programa que utilice un bucle for para imprimir todos los números pares entre 1 y 100.
 */


for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

/**
 * Sumar números en un rango
Escribe un programa que pida al usuario dos números, un inicio y un fin,
 y calcule la suma de todos los números en ese rango utilizando un bucle for.
 */
 let inicio = prompt("Introduce inicio");
 let fin = prompt("Introduce fin");
 let suma = 0;
 
 for (let i = Number(inicio); i <= Number(fin); i++) {
     suma = suma + i; 
 }
 
 console.log(suma); 

 /*
 *Tabla de multiplicar
Escribe un programa que pida al usuario un número y genere su tabla de multiplicar
 del 1 al 10 utilizando un bucle for. */

let num = prompt("Introduce numero para tabla de multiplicar",0);
for(i = 0; i <= 10; i++){
    console.log(num + ' * ' + i + ' = ' + (num*i))
}

/**
 * Adivinar un número
 *  Implementa un programa que genere un número
 *  aleatorio entre 1 y 10 y pida al usuario adivinarlo. El programa
 *  debe repetir el proceso mientras el usuario no acierte. Muestra
 *  un mensaje de felicitación al acertar.
 */

let numAleatorio = Math.floor(Math.random() * 11);
let respuesta = prompt("Introduce numero!",0);
while(respuesta != numAleatorio){
    respuesta = prompt("Numero incorrecto, prueba otra vez");
}
console.log("Felicidades, has descubierto el numero!");

/**
 * Validar entrada
 *  Escribe un programa que solicite al usuario un número positivo.
 *  Si introduce un número negativo o cero, repite la solicitud
 *  usando un bucle while.
 */

respuesta = prompt("Introduce numero positivo!",0);
while(respuesta < 0){
    respuesta = prompt("Numero incorrecto, tiene que ser positivo");
}
console.log("Numero correcto!");

/**
 * Suma acumulativa 
 * Crea un programa que permita al usuario ingresar números
 *  hasta que sume un total mayor o igual a 100. Muestra
 *  la suma total al finalizar.
 */

suma = 0;
while (suma < 100) {
    respuesta = Number(prompt("Introduce numero!", 0));
    suma = suma + respuesta;
}

console.log("La suma es de: " + suma);

/**
 * Menú interactivo
 * Diseña un menú interactivo con las opciones:
 * Ver mensaje de bienvenida.
 * Ver la fecha actual.
 * Salir.
 * Usa un bucle do-while para mostrar el menú hasta
 *  que el usuario seleccione la opción "Salir".
 */

const fecha = new Date();

do{
    console.log("Introduce opcion")
    console.log("1 . ver mensaje de Bienvenida")
    console.log("2 - Ver la fecha actual")
    console.log("3 - Salir")

    respuesta = prompt("Elige respuesta",0)

    switch(Number(respuesta)){
        case 1:
            console.log("Hola mundo!");
            break;
        case 2:
            console.log(fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
            break;
        case 3:
            console.log("Saliendo");
            break;
        default:
            console.log("Opcion no reconocida");
            break;
    }
}while(respuesta != 3);

/**
 * Contar intentos
 * Escribe un programa que genere un número aleatorio entre 1 y 10
 *  y permita al usuario adivinarlo. Usa un bucle do-while y cuenta
 *  cuántos intentos necesita el usuario.
 */

numAleatorio = Math.floor(Math.random() * 11);
respuesta = prompt("Introduce numero!",0);
let numIntentos = 1;
do{
    respuesta = prompt("Numero incorrecto, prueba otra vez");
    numIntentos++;
}while(respuesta != numAleatorio)
console.log("Felicidades, has descubierto el numero! con un numero de intentos de: " + numIntentos);

/**
 * Acumular caracteres
 * Crea un programa que pida al usuario ingresar caracteres
 *  y los concatene en una cadena, hasta que ingrese el
 *  carácter q. Luego, imprime la cadena resultante.
 */

let car = "";
let cad = "";
do{
    car = prompt("Introduce caracter");
    cad = cad + car;
}while(car!="q");
console.log(cad);

/**
 * Mayor de tres números
 * Solicita tres números al usuario y determina cuál es el mayor
 *  usando un if y un operador ternario.
 */

let num1 = Number(prompt("Introduce el primer numero:", 0));
let num2 = Number(prompt("Introduce el segundo numero:", 0));
let num3 = Number(prompt("Introduce el tercer numero:", 0));

let mayor = (num1 >= num2 && num1 >= num3) ? num1 : 
            (num2 >= num1 && num2 >= num3) ? num2 : num3;

console.log("El numero mayor es: " + mayor);

/**
 * Número par o impar
 * Escribe un programa que pida al usuario un número
 *  e indique si es par o impar utilizando un operador ternario.
 */

num = prompt("Intoduce Numero");

(num%2==0 ? console.log("Es par") : console.log("No es par"));

/**
 * Crea un programa que calcule el precio final de un producto según
 *  el precio ingresado por el usuario y un descuento del 10% si el
 *  precio es mayor a $100.
 */

let precio = prompt("Introduce precio del producto",0);

(precio>100 ? console.log("El precio final es: " + (precio * 0.90)) : console.log("El precio final es: " + (precio)));

/**
 * Valor predeterminado
 * Crea un programa que solicite al usuario ingresar un nombre
 *  y, si no proporciona nada (o escribe null), use el valor
 *  predeterminado "Invitado" para saludarlo.
 */

let nombre = prompt("Introduce tu nombre");

(nombre != "" ? console.log("Hola, " + nombre) : console.log("Hola, extraño!"));

/**
 * Configuración por defecto
 * Implementa un programa que permita al usuario establecer el valor de una variable
 * "color favorito". Si el usuario no ingresa nada, usa el valor predeterminado "azul".
 */

let colorFav = prompt("Introduce tu color favorito");
(colorFav == "" ? colorFav = "Azul" : colorFav = colorFav);
console.log(colorFav);

/**
 * Clasificación por edades
 * Crea un programa que solicite la edad del usuario y clasifique su rango de edad utilizando switch:
 * 0-12: "Niño"
 * 13-19: "Adolescente"
 * 20-64: "Adulto"
 * 65+: "Mayor".
 */

let edad = Number(prompt("Introduce tu edad:", 0));

let clasificacion;

switch (true) {
    case (edad >= 0 && edad <= 12):
        console.log("Niño");
        break;
    case (edad >= 13 && edad <= 19):
        console.log("Adolescente");
        break;
    case (edad >= 20 && edad <= 64):
        console.log("Adulto");
        break;
    case (edad >= 65):
        console.log("Mayor");
        break;
    default:
        console.log("Edad no valida");
        break;
}
