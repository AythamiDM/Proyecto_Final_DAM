//Creamos las rutas correspondientes a los endpoints
module.exports = app => {
    const images = require("../controllers/upload.controller.js");
    const upload = require("../middleware/upload")

    var router = require("express").Router();

    //Subir una imagen
    router.post("/upload", upload.single("file"), images.uploadFiles);

    app.use('/api/imagenes', router);
};