const express = require ("express")
const app = express()

const port = 3030

app.get ("/",(req,res)=>{
res.send ("estas en el home")
})

app.listen (port,()=>{
    console.log(`Servidor Ok en el puerto ${port}`);
})

