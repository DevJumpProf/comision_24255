/* DOMContentLoaded */
/* evento DOMContentLoaded para asegurar que el script se ejecute después de que el DOM se haya cargado completamente. */

document.addEventListener("DOMContentLoaded",()=>{
// obtener el cuerpo de la tabla donde se muestran los posteos
const bodyTablaPosteos = document.querySelector("#body-tabla-posteos")
// obtener el formulario para crear un nuevo posteo
const  formCrearPosteo = document.querySelector("#form-crear-posteo")

/* funcion para obtener los datos de la API usando Axios */
const fetchPosteos = async ()=>{
try {
    const respuesta = await axios.get (`http://localhost:3030/posteos`)
    console.log(respuesta.data); 
    const posteos = respuesta.data

/*     limpiar la tabla antes de agregar los nuevos datos */
bodyTablaPosteos.innerHTML = ""

// interar sobre los datos y agregar los nuevos datos
posteos.forEach(posteo=>{
/* crear una nueva fila */
const fila = document.createElement("tr")
// crear celdas para el titulo , contenido y acciones
const celdaTitulo = document.createElement ("td")
const celdaContenido = document.createElement ("td")
const celdaAcciones = document.createElement ("td")

// asignar el contenido de las celdas
celdaTitulo.textContent = posteo.titulo
celdaContenido.textContent = posteo.contenido

// crear boton de eliminar
const botonEliminar = document.createElement("button")
botonEliminar.textContent = "Eliminar"
botonEliminar.addEventListener("click", ()=>{
    borrarPosteo(posteo.id)
}) // ojo con esto

// crear boton para editar
const botonEditar = document.createElement("button")
botonEditar.textContent = "Editar"
botonEditar.addEventListener("click",()=>{
//redirigir a la pagina de edicion
window.location.href= `edit.html?id=${posteo.id}`
})
// agregar los botones a la celda de acciones
celdaAcciones.appendChild(botonEliminar)
celdaAcciones.appendChild(botonEditar)

// agregar las celdas a la fila
fila.appendChild(celdaTitulo)
fila.appendChild(celdaContenido)
fila.appendChild(celdaAcciones)
// agregar la fila al cuerpo de la tabla
bodyTablaPosteos.appendChild(fila)
})

} catch (error) {
    console.error("error para cargar posteos :",error)
}
}
// funcion para borrar un posteo

const borrarPosteo = async (id)=>{
    try {
        await axios.delete (`http://localhost:3030/posteos/${id}`);
        fetchPosteos()
    } catch (error) {
        console.error("error para borrar posteos :",error)
    }
    }

    // funcion para crear un  posteo

                                  // pasar a funcion flecha
formCrearPosteo.addEventListener("submit", async function(evento){
evento.preventDefault();
const nuevoPosteo = {
    titulo:document.querySelector("#nuevo-titulo").value ,
    contenido: document.querySelector("#nuevo-contenido").value ,
};

try {
    await axios.post(`http://localhost:3030/posteos/`,nuevoPosteo)
    //limpiamos el formulario
    formCrearPosteo.reset()
    //recargar la lista de posteos despues de crear uno nuevo
    fetchPosteos();
} catch (error) {
    console.error("error al crear posteo :",error)
}








})




    //llamar a la funcion para obtener y mostrar los posteos al cargar la pagina
    fetchPosteos();
})

