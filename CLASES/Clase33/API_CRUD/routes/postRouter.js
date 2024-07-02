const express = require ("express")

// controladores
const {traerPosteos,traerUnPosteo,crearPosteo,actualizarPosteo,borrarPosteo } = require ("../controllers/postControllers.js")

/* configuracion de rutas express // metodos de HTTP */
const router = express.Router()

router.get ("/" ,traerPosteos)
router.get ("/:id",traerUnPosteo )
router.post ("/", crearPosteo)
 router.put ("/:id", actualizarPosteo)
router.delete ("/:id", borrarPosteo) 

module.exports = router