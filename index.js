const express = require("express");
//const con = require('./config/conexion.js');//importando la conexion
const app = express();
//nos ayuda a analizar el cuerpo de la solicitud POST​
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//-- para dar accesos desde cualquier servidor​
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


//cargamos el archivo del controlador​
//app.use(require('./routes/rutas'));
app.use(require('./routes/rutas'));
app.listen(process.env.PORT||3300,() => {
    console.log("Servidor corriendo en el puerto 3300");
    console.log("Ejecute el navegador en la siguiente dirección, http://localhost:3300/");
});
module.exports = app;

