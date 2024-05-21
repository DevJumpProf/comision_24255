
                  /*      por tag/etiqueta */
/* let titulo = document.getElementsByTagName("h1") */

                 /* por ID */
/* let titulo = document.getElementById ("elementoID") */
/* console.log(titulo); */

/* x clase */
/* let titulo1 = document.getElementsByClassName ("elemento")

 */
/* titulo1[0].innerHTML = "Hola Codo a Codo 0!"
titulo1[1].innerHTML = "Hola Codo a Codo 1!" */



// selectores de css
/* h1
.elemento
#elementoID
 */

let titulo = document.querySelector (".elemento")

titulo.innerHTML = "estoy creando un parrafo de forma dinamica" 

const btn = document.createElement("button") //Creamos el boton y lo guardamos en btn
btn.innerHTML = "Soy un boton"  //creamos el tecto

//capturamos el div
let contenedor = document.querySelector(".contenedor")
contenedor.appendChild(btn)  // Lo agregamos al <body>

/* let titulo = document.querySelectorAll (".elemento") */




const h1 = document.createElement("h1")             //Creamos el <h1>
   const textNode = document.createTextNode("¡Hola!")  //Creamos el texto
   h1.appendChild(textNode)        //Colocamos el texto como hijo del <h1>
   document.body.appendChild(h1)   //Y ponemos el <h1> dentro del <body>




