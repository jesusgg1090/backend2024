const express = require("express");

const app = express();

const usuarios =[
    {
    
            id:1,
            nombre: "Jesus",
            apellido: "Garcia",
            email: "garciagg1090@gmail.com",
        },
    ];
app.get("/usuarios", (req, res) => {
    
res.status(200).send({usuarios: usuarios});
});//Obtener información

app.get("/usuarios/:id", (req, res) => {
    const {id} = req.params;
   // console.log(typeof +id);
   //console.log(isNaN(id));
   if(isNaN(id)){
    res.status(400).send({error:"El id debve ser un numero"});
    return
   };
    const usuario = usuarios.find((usuario) => usuario.id === +id);
    if(usuario === undefined){
        res.status(404),send({error: `Él usuario con id $(id) no exite`});
        return;
    }
res.status(200).send("Probando");
});
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});