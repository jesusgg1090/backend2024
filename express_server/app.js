const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hello World')
})

app.get('/loquesea', function(req,res){
    res.send('Lo que sea oe')
})

app.get('*', function(req,res){
    res.send('404 Error no encontrado pues')
})
app.listen(3000)