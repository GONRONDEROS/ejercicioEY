function jumpOnMarsh(camino){
    let largo = camino.length;
    let pasos = -1; /*Teniendo en cuenta que la posicion (indice del array) es siempre menor al largo del array (elementos del array) ya que inicializa en 0 mientras que el largo lo hace en 1, la condicion (A) siempre es verdadera. Incluso aunque me encuentre en la ultima posicion del camino.
    Debido a esto, a pesar de haber terminado de recorrer el camino, el algoritmo ingresa en el for y me adiciona 1 paso extra erroneamente. Es por ello que lo "calibro" comenzando el conteo de pasos en -1.*/ 
    
    for(let posicion = 0; posicion < largo;){    //(A)
        if((posicion + 2 < largo) && (camino[posicion + 2] == 0)){
            posicion = posicion + 2;
        } else {
            posicion = posicion + 1;
        }
        pasos = pasos + 1;
    };
    return pasos;
}

console.log(jumpOnMarsh([0, 0, 1, 0, 0, 0, 1, 0, 0])); //5
console.log(jumpOnMarsh([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0])); //9
console.log(jumpOnMarsh([0, 1, 0, 1, 0, 0])); //3
console.log(jumpOnMarsh([0, 1, 0, 0, 1, 0, 1, 0, 0])); //5
console.log(jumpOnMarsh([0, 0, 1, 0, 0, 1, 0, 1, 0])); //5
console.log(jumpOnMarsh([0, 0, 1, 0])); //2
console.log(jumpOnMarsh([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0])); //12