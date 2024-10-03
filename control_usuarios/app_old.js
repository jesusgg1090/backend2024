const express = require("express");

const app = express(); 

app.get("/", (req, res) => {
    res.status(404).send("Hola mundo!");
});//Obtener información
app.get("/prueba", (req, res) => {
    res.status(404).send("Hola desde la ruta de prueba");
});//Obtener información
app.post("/", (req, res) => {
    res.status(404).send("Hola desde POST");
});//Crear un nuevo recurso

app.put("/", (req, res) => {
    res.status(404).send("Hola desde PUT");
});//Actualizar un recurso

app.patch("/", (req, res) => {
    res.status(404).send("Hola desde PATCH");
});//Actualizar un recurso

app.delete("/", (req, res) => {
    res.status(404).send("Hola desde DELETE");
});//Eliminar un recurso
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
