//Creamos el controlador de categorias
const db = require("../models");
const Categoria = db.categorias;
// const Op = db.Sequelize.Op;


//Crear y guardar una nueva categoria
exports.create = (req, res) => {
    //Hacemos una validación
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //Creamos la categoria
    const categoria = {
        nombre: req.body.nombre
    };

    //Guardamos la categoria
    Categoria.create(categoria).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while creating commerce"
        });
    });
};



//Obtener todas las categorias de la base de datos
exports.findAll = (req, res) => {
    Categoria.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving categories"
        });
    });
};