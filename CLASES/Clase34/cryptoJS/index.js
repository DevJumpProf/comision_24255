const cryptoJS = require ("crypto-js")

const mensaje = "Este es el mensaje secreto"
const clave = "ClaveSecreta123"

/* ciframos el mensaje utilizando AES */
/* AES (Advanced Encryption Standard) */

// encriptarlo
const mensajeEncriptado = cryptoJS.AES.encrypt(mensaje,clave).toString()

console.log(mensajeEncriptado);

//desencriptarlo

const mensajeDesencriptado = cryptoJS.AES.decrypt(mensajeEncriptado,"ClaveSecreta123").toString(cryptoJS.enc.Utf8)
console.log(mensajeDesencriptado);