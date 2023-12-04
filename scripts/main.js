import { vehiculo } from "./vehiculo";
import { automovilDeportivo } from "./automovilDeportivo";

const containerResult = document.createElement('div');
document.body.appendChild(containerResult);

export function mostrarResultado(mensaje){
containerResult.innerHTML += (`<p>${ mensaje }</p>`);
}  

const vehiculo1 = new vehiculo('BMW', 'CLK', 'rojo', 1992, 2400)
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


const automovilDeportivo1 = new automovilDeportivo('lambo', 'Hurancan Evo', 'rojo',2015, 233 )
automovilDeportivo1.mostrarDatos();
automovilDeportivo1.acelerar(180);
automovilDeportivo1.arrancar();
automovilDeportivo.frenar();
automovilDeportivo1.activarModoDeportivo();

const deportivoObject = {
    marca: automovilDeportivo1.marca,
    modelo: automovilDeportivo1.modelo,
    color: automovilDeportivo1.color,
    añoFabricacion: automovilDeportivo1.añoFabricacion,
    cilindrada: automovilDeportivo1.cilindrada,
}

for(let key in deportivoObject){
    if(deportivoObject.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObject[key])
    }
}


localStorage.removeItem('marca')

localStorage.clear()