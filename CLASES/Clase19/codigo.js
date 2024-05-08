//OBJETOS

// CLAVES Y VALORES
const celular = {
    marca : "Motorola",
    modelo:"V3",
    stock: true,
    encender : () =>(`El celular ${celular.marca} modelo ${celular.modelo} Encendido`)
}
console.log(celular.marca);
console.log(celular.encender());


/* spread operator ... */

const generoPelicula = {
    nombredeGenero : "Accion",
    puesto : 1,
    habilitado: true
}

const elGranPez = {
    titulo : "El Gran Pez ",
    popularidad : 10,
    ...generoPelicula
}
console.log(elGranPez);
console.log(elGranPez.puesto );

/* destructuracion */

/* copiar datos sin destructuring */
let nombre = elGranPez.titulo
console.log(nombre);

/* copiar datos conts destructuring */
let {titulo:pelicula, popularidad} = elGranPez 
console.log(pelicula);





