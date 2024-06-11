const express = require ("express")
const cors = require ("cors") 
const postRouter = require ("./routes/postRouter.js")
const app = express()
const port = 3030

app.use(cors()) // habilito el intercambio de información
app.use(express.json()) // analiza los request

app.get ("/",(req,res)=>{
res.send ("estas en el home")
})  // sin modularizar

app.use ("/posteos",postRouter) // modularizado


app.listen (port,()=>{
    console.log(`Servidor Ok en el puerto ${port}`);
})

