const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimerHeroe({ nombre, apellido, poder, edad = 0 }) {
  nombre = "Victor";
  console.log(nombre, apellido, poder, edad);
}

// imprimerHeroe(deadpool);

const heroes = ["Deadpool", "Superman", "Batman"];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [, , h3] = heroes;

console.log(h3);
