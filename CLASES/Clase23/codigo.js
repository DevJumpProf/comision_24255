/* let titulo = document.querySelector (".elemento")
titulo.innerText = "estoy creando un parrafo de forma dinamica" 
 */
/* titulo.innerHTML =  */

/* let contenedor = document.querySelector(".container")
contenedor.innerHTML = `<img src="./imagen.png" alt="imagen" width="100px">`
 */
/* 
let parrafo = document.querySelector(".parrafo") */
/*  estilo - atributo (camelCase) = "valor" */
/* parrafo.style.color = "red"
parrafo.style.backgroundColor = "green"
parrafo.style.fontSize = "12px" */

/* EVENTOS */
/* LA PAGINA TERMINO DE CARGAR
LA PERSONA HACE CLICK EN UN BOTON
EL INPUT DEL FORMULARIO CAMBIÓ */

/* 1- LOAD
El evento onLoad es un evento que permite que todo el
script se ejecute cuando se haya cargado por completo
el objeto document dentro del objeto window. */
/*  on seguido del evento */
/* window.onload = ()=>{
  alert ("se cargó el documento")
} */

/* 2- EVENTO 
.onclick
El evento onclick nos permite ejecutar una acción
cuando se haga click sobre el elemento al cual le
estamos aplicando la propiedad  */

/* let boton = document.querySelector(".btn")
boton.onclick=()=>{
    alert ("hiciste click")
} */

/* 3)PREVENT DEFAULT( )
El preventDefault() nos permite evitar que se ejecute el
evento predeterminado o nativo del elemento al que se lo
estemos aplicando.
Podemos usarlo, por ejemplo, para prevenir que una
etiqueta “a” se comporte de manera nativa y que en vez
de eso haga otra acción.

ATENCION: Siempre tenemos que tener seleccionado el
elemento al que le queremos aplicar el
preventDefault() mediante los selectores. */

/* let hipervinculo = document.querySelector("a")

const mensaje = () =>{
    alert ("presionaste la etiqueta A")
}
 */
/* hipervinculo.addEventListener("click",mensaje) */

/* hipervinculo.onclick =(event)=>{
    alert ("hiciste Click")
    event.preventDefault()
} */

/* hipervinculo.addEventListener("click",()=>{
    alert ("hiciste Click")
})
 */


/* EVENTOS DEL MOUSE 
DOUBLECLICK
 */

let parrafo = document.querySelector(".parrafo")
/* parrafo.ondblclick = ()=>{
    alert("doble click")
} */
/* tambien podriamos hacer */
/* parrafo.addEventListener("dblclick",function(){
    alert("doble click")
})
 */

/* mouseover */
/* let saludo = "hola"
parrafo.onmouseover = ()=>{
    alert (`${saludo} como estas?`)
}
 */

/* mouseout */
/* parrafo.onmouseout= ()=>{
    alert ("quitaste el mouse")
}
 */
/* + eventos https://www.w3schools.com/js/js_events_examples.asp */

/* eventos de teclado */

/* let miInput= document.querySelector ("#miInput") */

/* El evento keydown es lanzado cuando una tecla es presionada
(hacia abajo). A diferencia del evento keypress, el evento
keydown es lanzado para las teclas que producen un carácter y
también para las que no lo producen.
  */

/* miInput.onkeydown = (event) =>{
    alert (`presionaste la tecla ${event.key}`)
    console.log(event);
}
 */

/* onkeyup */
/* miInput.onkeyup = (event) =>{
    alert (`levantaste la tecla ${event.key}`)
    console.log(event);
}
 */

/* *TIMERS* */
/* setTimeout
Se utiliza cuando queremos que nuestro código se ejecute una
sola vez, pasado un tiempo determinado. */

/* 

setTimeout(darAlerta,delay)

darAlerta = () =>{
    alert ("este es mi anuncio")
} */


  
/* setInterval
Se utiliza cuando queremos que nuestro código se ejecute una y
otra vez, pasado un tiempo determinado. */
const delay = 3000;

 setInterval(repite,delay);

const repite=()=>{
 alert("¡Este es mi anuncio repetido :) !")
 } 

/*  * clearTimeout y clearInterval */




















