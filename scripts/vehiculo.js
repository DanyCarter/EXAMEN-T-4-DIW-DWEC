class vehiculo {
    #marca;
    #modelo;
    #color;
    #añoFabricacion;
    #cilindrada;


constructor (marca, modelo, color, añoFabricacion, cilindrada) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#añoFabricacion = añoFabricacion;
    this.#cilindrada = cilindrada;
 }
get marca(){
    return this.#marca;
}

set marca(marca) {
    this.#marca = marca;
}

get modelo(){
    return this.#modelo
}

set modelo(modelo){
    this.#modelo = modelo
}

get color(){
    return this.#modelo;
}

set color(color){
    this.#color = color;
}

get añoFabricacion(){
    return this.#añoFabricacion;
}

set añoFabricacion(añoFabricacion){
    this.#añoFabricacion = añoFabricacion;
}

get cilindrada(){
    return this.#cilindrada;
}

set cilindrada(cilindrada){
    this.#añoFabricacion = cilindrada;
}



}