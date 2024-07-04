const bcryptjs = require ("bcryptjs")

//input password para registro
const registerPassword = "Contrasenia123"
//encriptamos 
let encriptada = bcryptjs.hashSync(registerPassword,8)
//SALT
console.log(encriptada);
//input password para loguearse
const loginPassword = "Contrasenia123"
// Comparacion
let comparacion = bcryptjs.compareSync(loginPassword,encriptada)
console.log(comparacion);