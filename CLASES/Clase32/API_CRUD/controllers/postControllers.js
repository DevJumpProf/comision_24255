const { DELETE } = require("sequelize/lib/query-types")
const posteosModel = require ("../models/posteosModel.js")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */
const traerPosteos = async (req,res)=> {
try {
const posteos =  await posteosModel.findAll()
res.json(posteos)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION PARA TRAER UN POSTEO = READ - GET */
const traerUnPosteo = async (req,res)=>{
try {
    const posteo = await posteosModel.findByPk(req.params.id)
    res.json(posteo)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION QUE CREA UN REGISTRO  = CREATE - POST */

const crearPosteo = async (req,res)=>{
    try {
        await posteosModel.create(req.body)
        res.json("registro creado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION QUE ACTUALIZA UN REGISTRO - UPDATE - PUT */

const actualizarPosteo = async(req,res)=>{
    try {
        await posteosModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("registro ACTUALIZADO correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION PARA BORRAR UN REGISTRO - DELETE - DELETE */
const borrarPosteo = async (req,res)=>{
    try {
        await posteosModel.destroy( { where:{id:req.params.id}})
        res.json("registro borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports= {traerPosteos,traerUnPosteo,crearPosteo,actualizarPosteo,borrarPosteo}