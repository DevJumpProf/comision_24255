const posteosModel = require ("../models/posteosModel.js")

/* CRUD
CREATE - READ - UPDATE - DELETE */


/* FUNCION QUE TRAE TODOS LOS POSTEOS
READ - GET */
const traerPosteos = async (req,res) =>{
    try {
const posteos = await  posteosModel.findAll()
 res.json(posteos)
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION QUE TRAE UN POSTEO
READ - GET */
const traerUnPosteo = async (req,res) =>{
 try {
    const posteo = await posteosModel.findByPk(req.params.id)
    res.json(posteo)
 } catch (error) {
    res.json({message:error.message})
 }
    }

 /*    FUNCION QUE CREA UN REGISTRO
    CREATE - POST */
    const crearPosteo = async (req,res) =>{
        try {
           await posteosModel.create(req.body)
            res.json ({"message":"Registro creado correctamente"}) 
  /*           Brian Herrera */
    /*         const newPosteo = await posteosModel.create(req.body);
            res.json(newPosteo); */
        } catch (error) {
            res.json({message:error.message}) 
        }
    }

/*     FUNCION QUE ACTUALIZAR UN REGISTRO
    UPDATE - PUT */

    const actualizarPosteo = async (req,res)=>{
        try {
            await posteosModel.update(req.body,{
                where: {id:req.params.id}
            })
            res.json ({"message":"Registro actualizado correctamente"}) 
        } catch (error) {
            res.json({message:error.message}) 
        }
    }

    const borrarPosteo = async (req,res)=>{
        try {
            await posteosModel.destroy({
                where: {id:req.params.id} 
            })
            res.json ({"message":`se borró el registro ${req.params.id}`}) 
        } catch (error) {
            res.json({message:error.message}) 
        }
    }






    module.exports = {traerPosteos,traerUnPosteo, crearPosteo,actualizarPosteo,borrarPosteo}