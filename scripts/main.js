import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

const containerResult = document.createElement('div');
containerResult.className = "container1";
document.body.appendChild(containerResult);

export function mostrarResultado(mensaje){
containerResult.innerHTML += `<p>${ mensaje }</p>`;
}  

const vehiculo1 = new Vehiculo('BMW', 'CLK', 'rojo', 1992, 2400)
    vehiculo1.mostrarDatos();
    vehiculo1.acelerar(100);
    vehiculo1.arrancar();
    vehiculo1.frenar();

const vehiculoObject = {
    marca: vehiculo1.marca,
    modelo: vehiculo1.modelo,
    color: vehiculo1.color,
    añoFabricacion: vehiculo1.añoFabricacion,
    cilindrada: vehiculo1.cilindrada,
}

console.log(JSON.parse(localStorage.getItem("vehiculo")))

localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));


const AutomovilDeportivo1 = new AutomovilDeportivo('lambo', 'Hurancan Evo', 'rojo',2015, 233 )
AutomovilDeportivo1.mostrarDatos();
AutomovilDeportivo1.acelerar(180);
AutomovilDeportivo1.arrancar();
AutomovilDeportivo.frenar();
AutomovilDeportivo1.activarModoDeportivo();

const deportivoObject = {
    marca: AutomovilDeportivo1.marca,
    modelo: AutomovilDeportivo1.modelo,
    color: AutomovilDeportivo1.color,
    añoFabricacion: AutomovilDeportivo1.añoFabricacion,
    cilindrada: AutomovilDeportivo1.cilindrada,
}

for(let key in deportivoObject){
    if(deportivoObject.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObject[key])
    }
}


localStorage.removeItem('marca')

localStorage.clear()