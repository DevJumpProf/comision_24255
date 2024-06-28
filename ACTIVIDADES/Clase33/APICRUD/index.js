const express = require ("express")
const app = express()
const port = 3030
const cors = require("cors")
const posteosRouter = require("./routes/posteosRouter.js")
const db = require ("./data/db.js")

app.use(cors())
app.use (express.json()) // analizamos y lo ponemos en formato req.body

    /*    pedido http/ruta - funcion = controler */
app.get ("/",(req,res)=>{
    res.send("estas en el home")
}) // sin modularizar

app.use ("/posteos",posteosRouter)

// conexion a la base de datos
const conexiondb = async ()=>{
 try {
    await db.authenticate()
    console.log(`Conexion ok a la base de datos`);
 } catch (error) {
    console.log(`el error es : ${error}`)
 }
}

app.listen(port,()=>{
    conexiondb()
    console.log(`Server ok en el puerto ${port}`);
})