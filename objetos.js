let nomObj = new Object();

let user = {
    name: "Alfon",
    age: 23
};

alert(user.name);

user.isAdmin = true;
delete user.isAdmin;

let key = "Likes birds";

user.key = key;

let fruit = prompt("¿Que fruta comprar?", "apple");

let bag = {
    [fruit] : 5, // El nombre de la propiedad proviene de la carialbe fruit
};

alert(bag.apple); // 5 si fruit = apple

function makeUser(name, age) {
    return {
        name,
        age,
        // otras propiedades
    };
}

let user = makeUser("John", 30);
alert(user.name);

// Comprobar si existe clave
let prueba = "Apellido";
console.log("age" in user);
console.log(prueba in user);

for(key in object) {
    // Se ejecuta el cuerpo por cada clave entre las propiedades del objeto
}

let user2 = {
    name: "Jhon",
    age: 30,
    isAdmin: true,
};

for (let key in user){
    // Acceso a clave
    console.log(key);

    // Acceso al valor de la clave
    console.log(user[key]);
}

Object.assign(dest, ...sources);

let user3 = {name: "Jhon"};

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

// Copia todas las propiedades desde permissions1 y permissions2 en user
Object.assign(user3, permissions1, permissions2);

// ahora es user = {name: "John", canView: true, canEdit: true }
alert(user3.name); // Jhon
alert(user3.canView); // true
alert(user3.canEdit); // true

let user4 = {
    name: "Jhon",
    age: 30,
    sizes: {
        altura: 180,
        peso: 80,
    }
};

//structuredClone(object)
let copia = structuredClone(user);

let a = {};
let b = {};

alert( a==b );
alert( a===b ); // Comparacion estricta

