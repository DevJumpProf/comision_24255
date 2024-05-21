/* ARRAYS - MATRICES -ARREGLOS */

let datos = ["cadena", 3, true,["masdatos","datos"]];

let numeros = [1,2,8,7,4,6,7,3,12];

/* El orden numérico de una matriz SIEMPRE comienza en 0 */

  //  INDICE        0       1       2       3       4
let animales = ["Gato","Perro","Conejo","Perro","Pez"];
// ELEMENTOS        1    2       3         4      5

/* METODOS DE ARRAY */

/* buscar 
JOIN()
Concact () */

/* splice cambia el contenido de un array eliminando los elementos existentes y/o agregando nuevos elementos */

animales.splice(1,2,"Gatito")
console.log(animales); 

/* slice () devuelve una copia de una parte del array dentro de un nuevo array, empezando por el inicio hasta el fin ( fin no esta incluido ) no modifica el array actual */
/* 
const nuevoArray = animales.slice(0,3)
console.log(nuevoArray); */



/* indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente */
/* const nuevo = animales.indexOf("Perro") 
console.log(1); */

/* reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor. */
/* const resultado = numeros.reduce((acumulador,actual)=> acumulador+actual)
console.log(resultado); */

/* includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
.includes
 */

/* console.log(animales.includes("Tortuga")); */

/* every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada. */
/* let mayorQueCuatro = numeros.every(numero=>numero>=1)
console.log(mayorQueCuatro); */

/* some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array
.some */
/* 
let mayorQueCuatro = numeros.some(numero=>numero<5)
console.log(mayorQueCuatro ); */

/* .find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
.find */
/* const mayorATres = numeros.find(numero=>numero>3)
console.log(mayorATres); */
/* const nuevo = animales.find(animal=> animal === "Perro")
console.log(nuevo); */

/* .forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo. */

/* animales.forEach((animal,i)=>{
    console.log(`El ${animal} se encuentra en el indice ${i}`);
})

 */
/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */

/* let nuevoArray = animales.filter(animales=> animales==="Perro"||animales==="Gato")
console.log(nuevoArray); */

/* .map() 
.map() : Permite recorre el array y modificar los elements presentes en él, retornando un nuevo array con la misma longitud que el original. */

/* const nuevoArray = numeros.map(numero => numero*10 )
console.log(NuevoArray);
 */

/* `.shift()` eliminará el primer elemento de la matriz. */
/* animales.shift ()
console.log(animales); */

/* unshift
`.unshift(item)` colocará un nuevo elemento en la primera posición de la matriz, */

/* animales.unshift("Delfin")
console.log(animales);
 */
// PUSH 
//`.push` agrega un elemento al final de la matriz, incrementando su longitud en 1. `.push` devuelve la nueva longitud.
animales.push("Aguila")
console.log(animales);

//.POP
//.pop` elimina el último elemento de la matriz, disminuyendo la longitud en 1. 
animales.pop()
console.log(animales);







/* número de elementos en una matriz= .length */
console.log(animales.length);

/* acceder a los elemento de un array */
console.log(animales[2]);
                            
/* Para acceder dinámicamente al último elemento de la matriz, utilizaremos el método `.length` */
console.log(animales[animales.length-1]);

// REASIGNACIÓN

animales[0] = "Cocodrilo"
console.log(animales);










