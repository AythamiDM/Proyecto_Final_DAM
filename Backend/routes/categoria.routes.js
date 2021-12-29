//Creamos las rutas correspondientes a los endpoints
module.exports = app => {
    const categorias = require("../controllers/categoria.controller.js");

    var router = require("express").Router();

    //Crear una nueva categoria
    router.post("/", categorias.create);

    //Obtener todas las categorias
    router.get("/", categorias.findAll);

    app.use('/api/categorias', router);
};