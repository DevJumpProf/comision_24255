const express = require ("express")

// controladores
const {enviarPosts,enviarUnPost} = require ("../controllers/postControllers.js")

/* configuracion de rutas express // metodos de HTTP */
const router = express.Router()

router.get ("/" ,enviarPosts)
 router.get ("/:id",enviarUnPost)
 /*
router.post ("/", funcion que envia un posteo a la base de datos)
router.put ("/:id", funcion actualiza un posteo de la base de datos)
router.delete ("/id", funcion que borra un posteo de la base de datos) */

module.exports = router