import { vehiculo } from "./vehiculo";

containerResult = document.createElement('div');
document.body.appendChild(containerResult);

export function mostrarResultado(mensaje){
containerResult.innerHTML += (`<p>${ mensaje }</p>`);
}  



const vehiculo1 = new vehiculo('Mercedes', 'X6', 'negro', 2013, 100)
    vehiculo1.acelerar(100);
    vehiculo1.arrancar();
    vehiculo1.frenar();


