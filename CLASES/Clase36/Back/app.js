const express = require ("express")
const bodyParser = require ("body-parser") // middleware para manejar solicitudes
const {check,validationResult} = require ("express-validator") // middleware
const cors = require ("cors") // permite las solicitudes entre dominios (origen cruzado)

const app = express()

app.use(bodyParser.json()) // parsear datos en formato JSON
app.use(bodyParser.urlencoded({extended:true})); // toma los datos en formato URL-encoded y los configura

// configurar CORS
app.use (cors())

// tarea: modularizar

/* crear router y controlador para registro */
app.post ("/registrar",[
    check("nombreUser").not().isEmpty().withMessage("En nombre User, no puede estar Vacio").trim(), // valida que el nombre de user no esté vacio y lo sanitiza
    check("email").isEmail().withMessage("Debe ser un correo electronico valido").normalizeEmail(), // VALIDA QUE EL MAIL SEA CORRECTO Y LO NORMALIZA
    check("password").isLength({min:5}).withMessage("La contraseña debe tener minimo 5 caracteres")
],(req,res)=>{
    console.log('Datos recibidos:', req.body);// muestra en la consola , los datos recibidos 
const errores = validationResult(req)// tomamos los errores de validacion
if(!errores.isEmpty()){
    console.log('Errores de validación:', errores.array());;// mostramos los errores de validacion
    return res.status(422).json({errores:errores.array()}) // si hay errores , respondemos el estado 422 y los errores en formaro JSON
}
res.json({message: "registro exitoso"})
})

const puerto = 3000

app.listen(puerto,()=>{
    console.log("Servidor ok en el puerto",puerto);
})