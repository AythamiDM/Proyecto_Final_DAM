const fs = require("fs");

const db = require("../models");
const Image = db.images;

exports.uploadFiles = async (req, res) => {
    try {
        console.log(req.file);
        //obtenemos y verificamos la carga de archivos desde req.file
        if (req.file == undefined) {
            return res.send(`Debes seleccionar un archivo`);
        }

        //usamos el método del modelo Sequelize create() para guardar un objeto
        //de imagen (tipo, nombre, datos) en la base de datos MySQL
        //data se obtiene de la carpeta de cargas (función del middleware que almacenó la imagen).
        Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                __basedir + "/resources/static/assets/uploads/" + req.file.filename
            ),

        //Si el proceso es exitoso, guardamos y escribimos los datos de la imagen en la carpeta tmp
        }).then((image) => {
            fs.writeFileSync(
                __basedir + "/resources/static/assets/tmp/" + image.name,
                image.data
            );

            return res.send(`El archivo ha sido subido`);

        });

    } catch (error) {
        console.log(error);
        return res.send(`Ha ocurrido un error mientras se cargaba la imagen: ${error}`);
    }
};