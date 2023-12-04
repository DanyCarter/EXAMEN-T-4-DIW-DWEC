import { vehiculo } from "./vehiculo";
import { mostrarResultado } from "./main";

export class automovilDeportivo extends vehiculo(){
    #activarModoDeportivo;


contructor (marca, modelo, color, añoFabricacion, cilindrada, activarModoDeportivo){
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