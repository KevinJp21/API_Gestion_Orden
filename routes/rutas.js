
const route = require("express").Router();
const rutaGestionOrden = require("../controller/GestionController");

route.use("/", rutaGestionOrden);

module.exports = route;