//clases : podemos verlo como una plantilla para crear objetos

// pilares de la POO
/* Abstraccion
Abstraer, es eliminar los detalles inncesarios para solo nos enfocamos en los aspectos que son necesarios para el contexto o sistema que estamos desarrollando.

encapsulacion
Se centra en ocultar los detalles que no son relevantes para el exterior

herencia
el mecanismo por el cual la POO nos permite reutilizar código sin necesidad de hacer copy-paste. Nos permite relacionar clases de tal forma que una clase hereda propiedades y métodos de otra clase. 

polimorfismo
Se refiere a la capacidad de realizar una misma acción en diferentes formas.
 */

// requerimiento Características de los libros: autor, título, precio, stock e Id.

/* las propiedades privadas = #nombre */

/* #es parte de la propuedad en setInterval, debe usarse para declarar y acceder a la propiedad */

class Libros {
#autor
    #titulo
    #precio
    #stock
    #id
    constructor (autor,titulo,precio,stock,id){ // constructor

            this.#autor=autor,
            this.#titulo =titulo,
            this.#precio=precio,
            this.#stock=stock,
            this.#id=id
    }
     //metodo que muestre la info 
     verInfo(){
        let info = (`Info del libro: ${this.#titulo}, autor: ${this.#autor}, precio ${this.#precio},ID: ${this.#id} `)
        return this.#stock>0 ? info+= `Stock:${this.#stock}` : info+= " stock : No disponible"
     }
}


const libro1 =new Libros("Guy des cars", "El Solitario",3500,10,"1")
const libro2 =new Libros("Robin Sharma", "el club de las 5 de la mañana",6000,0,"2")

console.log(libro1.titulo);
/* libro1.autor = "otro autor" */

console.log(libro1.verInfo());
/*  console.log(libro1); */
/* console.log(libro2.verInfo()); */


class Comics extends Libros {
#volumen
#ilustradores
    constructor (titulo,autor,precio,stock,id,volumen,ilustradores){
     super(autor,titulo,precio,stock,id), // lo que heredo de libros
     this.#volumen= volumen,
     this.#ilustradores= ilustradores
    }
infoComic() {
    let info = `,ilustradores: ${this.#ilustradores} , volumen : ${this.#volumen}`
    return `${this.verInfo()}, ${info}`
}

}

///?¡?¡?¡?¡

const comic1 = new Comics ("xmen","stan lee",1200,1,0,10,["ilustrador1","ilustrador2"])
console.log(comic1.infoComic());
