const express = require("express");

const app = express();
app.get("/usuarios", (req, res) => {
    const usuarios =[
{

        id:1,
        nombre: "Jesus",
        apellido: "Garcia",
        email: "garciagg1090@gmail.com",
    },
];
res.status(200).send(usuarios);
});//Obtener información
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});