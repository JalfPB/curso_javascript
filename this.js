let user = {
    name: "jhon",
    age: 30
};

user.sayHi = function() {
    alert(this.name + ' Hola!');
};

user.sayHi();

console.log(this.name);

// Si obj.f() es llamado, entonces this es obj durante el llamado de f

let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi();

function User(name){
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Alfonso");

console.log(user.name);

// new.target permite verificar si la funcion ha sido llamada con o sin el uso de new

function User(){
    alert(new Target);
};

// Sin new()
User(); // Undefined

// con new()
new User(); // function User { ... }

function User(name){
    if(!new.target){
        return console.log("Error"); // Error
    }

    this.name = name;
}

let john = User("Jhon"); // Redirige llamada a new User

function SmallUser(){

    this.name = "Jhon";

    return { name:"Godzilla"}; // <- Devuelve este objeto
}

alert(new SmallUser().name);

