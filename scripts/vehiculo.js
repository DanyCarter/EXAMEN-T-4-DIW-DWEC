import { mostrarResultado } from "./main.js"


export class Vehiculo {
    #marca;
    #modelo;
    #color;
    #añoFabricacion;
    #cilindrada;


    constructor(marca, modelo, color, añoFabricacion, cilindrada) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#añoFabricacion = añoFabricacion;
        this.#cilindrada = cilindrada;
    }

    mostrarDatos() {
        const mensaje = `
<br />
La marca del modelo es: ${this.#marca}
<br />
El modelo es ${this.#modelo}
<br />
El color del coche es: ${this.#color}
<br />
El año de fabricacion es: ${this.#añoFabricacion} 
<br />
La cilindrada es: ${this.#cilindrada}
`
        mostrarResultado(`<p>${mensaje}</p>`);

    }


    acelerar(velocidad) {
        const mensaje = `El vehiculo ha acelerado`;
        mostrarResultado(`<p>${mensaje}</p>`);

    }

    arrancar() {
        const mensaje = `El vehiculo ha arrancado`;
        mostrarResultado(`<p>${mensaje}</p>`);

    }

    frenar() {
        const mensaje = `El vehiculo ${this.#marca} ha frenado`;
        mostrarResultado(`<p>${mensaje}</p>`);

    }

    get marca() {
        return this.#marca;
    }

    set marca(marca) {
        this.#marca = marca;
    }

    get modelo() {
        return this.#modelo
    }

    set modelo(modelo) {
        this.#modelo = modelo
    }

    get color() {
        return this.#modelo;
    }

    set color(color) {
        this.#color = color;
    }

    get añoFabricacion() {
        return this.#añoFabricacion;
    }

    set añoFabricacion(añoFabricacion) {
        this.#añoFabricacion = añoFabricacion;
    }

    get cilindrada() {
        return this.#cilindrada;
    }

    set cilindrada(cilindrada) {
        this.#añoFabricacion = cilindrada;
    }

}