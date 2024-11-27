
// for...Of
for(let char of "test"){
    console.log(char);
}

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done : false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for(let num of range){
    alert(num); 
}

function Perro(nombre, raza){
    this.nombre = nombre;
    this.raza = raza;
    this.saludar = function(){
        console.log(`Hola, el nombre de mi perro es ${this.nombre}
                                            y su raza es ${this.raza}`)
    };
}

const thunder = new Perro("Thunder", "Cruce");
thunder.saludar();

for (let propiedad in thunder) {
    console.log(`${propiedad}:${thunder[propiedad]}`);
}

let str = "Hola";

let iterador = str[Symbol.iterator]();

while (true){

    let result = iterador.next();
    if(result.done) break;
    console.log(result.value);

}

const frutas = ["manzana", "banana", "cereza"];
for(const fruta of frutas){
    console.log(fruta);
}