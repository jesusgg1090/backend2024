const { request, response } = require('express');
const pool = require('../db/connection');
const {usersQueries} = require('../models/users');

//const users = [ //crear arreglo
  //{ id: 1, name: 'Jeni GR' }, //los registro que se va a almacenar
  //{ id: 2, name: 'Jen GR' },
  //{ id: 3, name: 'Lalis ig' },
//];


// paraObtener todos los usuarios
const getAllUsers = async (req = request, res = response) => {
 let conn; 
try{
  conn = await pool.getConnection();
  const users= await conn.query(usersQueries.getAll );
  
  res.send(users);

} catch (error){
  res.status(500).send(error);
  return;
} finally{
 if (conn) conn.end();
}
};

// para Obtener un usuario por ID
const getUserById = async (req = request, res = response) => {
  const { id } = req.params; ;//se acceda en el solicitud atreves de req
  //se tiene que validar un numero por id

  if (isNaN(id)) {
    res.status(400).send('Invalid ID');
    return;
  }

  let conn;
  try{
    conn = await pool.getConnection();
    const user = await conn.query(usersQueries.getById, [+id]);

    if (user.length === 0) {
      res.status(404).send('User not found');
      return;
    }

    res.send(user);
  }catch (error) {
    res.status(500).send(error);
  }finally{
    if(conn) conn.end();
  }

  //hacer un arrgelo donde pasa un fincion deonde debe terner TRUBUTO Y QUE REPRESENTA EL ARRGELO
 // const user = users.find((user) => user.id === +id);
  //si el variable de usuario termine el valor si a ningino se debe avisar al users
  
};

// paraAgregar un nuevo usuario
const addUser = async (req = request, res = response) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.status(400).send('Name is required');
    return;
  }

let conn;  
  try{
    conn = await pool.getConnection();
    const user = await conn.query(usersQueries.getByUsername, [username]);

    if(user.length > 0 ){
      res.status(409).send('Username already exits');
      return;
    }

    const newUser = await conn.query(usersQueries.create, [username, password, email]);
    if(newUser.affectedRows === 0){
      res.status(500).send('User could not be created');
      return;
    }
    //console.log(newUser);

    res.status(201).send("user created succesfully"); 

  }catch (error){
    res.status(500).send(error);
    return;
  }finally{
    if (conn) conn.end();
  }
};

// Actualizar un usuario existente
const updateUser = (req = request, res = response) => {
  const { id } = req.params;
  const { name } = req.body;

  if (isNaN(id)) {
    res.status(400).send('Invalid ID');
    return;
  }

  const user = users.find((user) => user.id === +id);
  if (!user) {
    res.status(404).send('User not found');
    return;
  }

  if (!name) {
    res.status(400).send('Name is required');
    return;
  }

  user.name = name;
  res.send(user);
};

// Eliminar un usuario
const deleteUser = (req = request, res = response) => {
  const { id } = req.params;

  if (isNaN(id)) {
    res.status(400).send('Invalid ID');
    return;
  }

  const index = users.findIndex((user) => user.id === +id);
  if (index === -1) {
    res.status(404).send('User not found');
    return;
  }

  users.splice(index, 1);
  res.status(204).send(); // 204 No Content indica éxito sin contenido adicional
};

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };