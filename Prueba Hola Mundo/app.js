const express = require ('express')
//Instancia express constante tiene nuestra aplicacion
const app = express()
// req y res argumentos (datos entrada y respuesta)
app.get('/', function(req, res){
    //send envia respuesta
    res.send("Hola Mundo!!")
})
//Puerto 3001 nuestra app corre
app.listen(3000)