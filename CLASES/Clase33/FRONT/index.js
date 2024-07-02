
/* DOMContentLoaded */
document.addEventListener("DOMContentLoaded",()=>{
/* Obtener el body de la tabla donde se mostraran los posteos */
const bodyTablaPosteos = document.querySelector("#body-tabla-posteos")
/* Obtener el formulario para crear un nuevo posteo */
const formCrearPosteo = document.querySelector("#form-crear-posteo")

// funcion para obtener los datos de nuestra API utilizando AXIOS

const fetchPosteos = async ()=>{
try {
    const respuesta = await axios.get (`http://localhost:3030/posteos/`)
/*     console.log(respuesta.data); */
const posteos = respuesta.data
//limpiar la tabla antes de agregar los nuevos datos
bodyTablaPosteos.innerHTML = "";
/* Iterar sobre los datos y agregar cada posteo a la tabla */
posteos.forEach(posteo=>{
    // creo una nueva fila
    const fila = document.createElement("tr")
    //Crear celdas para titulo, contenido y acciones
    const celdaTitulo = document.createElement("td")
    const celdaContenido=document.createElement("td")
    const celdaAcciones= document.createElement("td")

    // asignar el contenido de las celdas
    celdaTitulo.textContent = posteo.titulo
    celdaContenido.textContent = posteo.contenido

    // crear el boton de eliminar
    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    botonEliminar.addEventListener("click",()=>{borrarPosteo(posteo.id)})

     // crear el boton para editar un posteo
     const botonEditar = document.createElement("button")
     botonEditar.textContent = "Editar"
     botonEditar.addEventListener("click", ()=>{
        // Redirigir a la pagina de edicion  con el ID del post en la url
        window.location.href = `edit.html?id=${posteo.id}`
     })
 // agregar los botones a la celda de acciones
     celdaAcciones.appendChild(botonEliminar)
     celdaAcciones.appendChild(botonEditar)

// agregamos las celdas a la fila
fila.appendChild(celdaTitulo)
fila.appendChild(celdaContenido)
fila.appendChild(celdaAcciones)

// Agregar la fila al cuerpo de la tabla
bodyTablaPosteos.appendChild(fila)
})
} catch (error) {
    console.error (`Error al obtener los post : ${error}`)
}
}
// funcion para eliminar unposteo
const borrarPosteo = async (id)=>{
    try {
        await axios.delete (`http://localhost:3030/posteos/${id}`)
        // recargare la lista de posteos despues de elminar
        fetchPosteos()
    } catch (error) {
        console.error (`Error al eliminar el post : ${error}`)
    }
}

// Funcion para crear un nuevo posteo
formCrearPosteo.addEventListener("submit", async function (evento){
    evento.preventDefault();
    const nuevoPosteo = {
        titulo: document.querySelector("#nuevo-titulo").value ,
        contenido:document.querySelector("#nuevo-contenido").value 
    };
    try {
        await axios.post(`http://localhost:3030/posteos/`,nuevoPosteo)
        //limpiamos el formulario
        formCrearPosteo.reset()
        // recargue los posteos actualizado
        fetchPosteos()
        
    } catch (error) {
        console.error (`Error al postear: ${error}`)
    }

})

//llamar a la funcion para obtener y mostrar los posteos cuando Carga la pagina
fetchPosteos()
})