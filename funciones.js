/**
 * function nombre(parm1, param2... paramN){
 * cuerpo de la funcion
 * }
 *
 * nombre();
 */

function mostrarMensaje() {
  alert("Hola a todos!");
}

mostrarMensaje();

function mostrarMensaje(persona, texto) {
  alert(persona + ": " + texto);
}

mostrarMensaje("Alfon", "Hola");
mostrarMensaje("Alfon", "Mundo");

function mostrarMensaje(persona, texto) {
  texto = texto || "Sin texto dado";
}

function showCount(count) {
  alert(count ?? "Desconocido");
}

showCount(0);
showCount(null);
showCount();

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result);

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Tienes permiso de tus padres?");
  }
}

let age = prompt("Que edad tienes?", 18);

if (checkAge(age)) {
  alert("Acceso otorgado");
} else {
  alert("Acceso denegado");
}

/**
 * GET
 * CALC
 * CREATE
 * CHECK
 */

// Guardar funciones en variables

let hola = function () {
  alert("Hola");
};

// Funciones CallBack

function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

function showOk(){
    alert("Estas de acuerdo.");
}

function showCancel(){
    alert("Cancelaste la ejecucion.");
}

// Las funciones showOk, showCancel son  pasadas como argumentos de ask
ask("Estas de acuerdo?", showOk, showCancel);


