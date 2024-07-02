const express = require ("express")
const cors = require ("cors") 
const postRouter = require ("./routes/postRouter.js")
const app = express()
const port = 3030

const db = require ("./data/db.js")

app.use(cors()) // habilito el intercambio de información
app.use(express.json()) // analiza los request

app.get ("/",(req,res)=>{
res.send ("estas en el home")
})  // sin modularizar

app.use ("/posteos",postRouter) // modularizado

// conexion a la base de datos

const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log(`Conectado Ok a la Base de datos`);
    } catch (error) {
        console.log(`Hay un error y es el siguiente : ${error}`);
    }
}


app.listen (port,()=>{
    conexionDB()
    console.log(`Servidor Ok en el puerto ${port}`);
})

