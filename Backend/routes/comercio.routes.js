//Creamos las rutas correspondientes a los endpoints
module.exports = app => {
    const comercios = require("../controllers/comercio.controller.js");

    var router = require("express").Router();

    //Crear un nuevo comercio
    router.post("/", comercios.create);

    //Obtener todos los comercios
    router.get("/", comercios.findAll);

    //Obtener un comercio por las categorias a las que pertenece
    router.get("/:categoria", comercios.findByCategory);

    //Actualizar los datos de un comercio por su ID
    router.put("/:id", comercios.update);

    //Eliminamos un comercio por su ID
    router.put("/:id", comercios.delete);


    app.use('/api/comercios', router);
};