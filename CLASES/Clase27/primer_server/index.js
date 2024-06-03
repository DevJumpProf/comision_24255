
const http = require ("http") // http es un modulo nativo de node

http.createServer((req,res)=>{// funcion create server con el callbak (req, res)
res.writeHead(200,{"content-Type": "text/plain"}) // contenido texto plano
res.end ("server NODE") // texto salida

}).listen(3030,"localhost") // escucha puerto y origen del servidor