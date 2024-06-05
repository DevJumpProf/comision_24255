const express = require ("express")
const app = express()
const port = 3030

app.get ("/",(req,res)=>{
res.send("estas en el home con el servidor creado con express")
})
app.get ("/conocenos",(req,res)=>{
res.send ("Estas en la seccion conocenos")
})
app.listen (port,()=>{
    console.log(`Server ok en el puerto ${port}`);
})

// npm i nodemon -g

/* METODOS HTTP: 
GET - POST - PUT -  DELETE 
CRUD 
CREATE : CREAR : POST
READ: LEER : GET
UPDATE : ACTUALIZAR : PUT
DELETE: BORRAR : DELETE */

