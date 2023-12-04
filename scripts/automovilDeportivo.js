import { vehiculo } from "./vehiculo";
import { mostrarResultado } from "./main";

class automovilDeportivo extends vehiculo(){
    #activarModoDeportivo;


contructor (marca, modelo, color, añoFabricacion, cilindrada, activarModoDeportivo){
    super(marca, modelo, color, añoFabricacion, cilindrada);

    this.#activarModoDeportivo = activarModoDeportivo;

    }
acelerar(velocidad){
    const mensaje = `El automovil deportivo ha acelerado`;
}

arrancar(){
    const mensaje = `El deportivo ha arrancado`;
}

acelerar(){
    const mensaje = `El vehiculo deportivo ${this.marca} ha acelerado`;
}

get activarModoDeportivo(){
    return this.#activarModoDeportivo;
    }

set activarModoDeportivo(activarModoDeportivo){
    this.#activarModoDeportivo = activarModoDeportivo;
}
}