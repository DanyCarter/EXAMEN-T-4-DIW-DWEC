import { Vehiculo } from "./vehiculo.js"
import { mostrarResultado } from "./main.js"

export class AutomovilDeportivo extends Vehiculo{
    #activarModoDeportivo;


constructor (marca, modelo, color, añoFabricacion, cilindrada, activarModoDeportivo){
    super(marca, modelo, color, añoFabricacion, cilindrada);

    this.#activarModoDeportivo = activarModoDeportivo;

    }

get activarModoDeportivo(){
    return this.#activarModoDeportivo;
    }

set activarModoDeportivo(activarModoDeportivo){
    this.#activarModoDeportivo = activarModoDeportivo;
}

mostrarDatos(){

    super.mostrarDatos();

    const datosVehiculo =`${mensaje}`;
    mostrarResultado(`<p>${ mensaje }</p>`);
}


}