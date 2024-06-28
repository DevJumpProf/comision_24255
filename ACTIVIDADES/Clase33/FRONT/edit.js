

document.addEventListener("DOMContentLoaded", ()=>{

//Obtener el formulario de edicion
const formulario = document.querySelector("#formEditarPosteo")
//Obtener los parametros dela URL
const ParametrosURL = new URLSearchParams(window.location.search)
//Obtener el ID del post a Editar
const IdPosteo = ParametrosURL.get ("id")

// funcion para obtener los datos del posteo por su id

const fecthPosteo = async (id) =>{
    try {
        const respuesta = await axios.get(`http://localhost:3030/posteos/${id}`)
   /*      console.log(respuesta.data);  */
        const posteo = respuesta.data
        // asignar los valores obtenidos a los campos del formulario
        document.querySelector("#nuevo-titulo").value = posteo.titulo
        document.querySelector("#nuevo-contenido").value = posteo.contenido
    } catch (error) {
        console.error('Error al obtener el post:', error);
    }
}
    // llamar a la funcion para obtener el posteo actual
    if (IdPosteo){
        fecthPosteo(IdPosteo)
    }

    
// funcion para actualizar el posteo
formulario.addEventListener("submit",async function (event){
event.preventDefault()
const posteoActualizado = {
    titulo: document.querySelector("#nuevo-titulo").value,
    contenido: document.querySelector("#nuevo-contenido").value
}

try {
    await axios.put(`http://localhost:3030/posteos/${IdPosteo}`,posteoActualizado)
    alert ("Posteo Actualizado correctamente")
    //redirigimos a la pagina principal despues de actualizar
    window.location.href="index.html"
} catch (error) {
    console.error('Error al actualizar el post:', error);
}

})


})