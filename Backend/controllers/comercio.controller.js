//Creamos el controlador de comercio
const db = require("../models");
const Comercio = db.comercios;
const Op = db.Sequelize.Op;

//Crear y guardar un nuevo comercio
exports.create = (req, res) => {
    //Hacemos una validación
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    //Creamos el comercio
    const comercio = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        password: req.body.password,
        cif: req.body.cif,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion
    };

    //Guardamos el comercio
    Comercio.create(comercio).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while creating commerce"
        });
    });
};


//Obtener todos los comercios de la base de datos
//u obtener los que pertenecen a una categoria
exports.findAll = (req, res) => {
    const categoria = req.query.categoria;
    var condicion = categoria ? { categoria: { [Op.like]: `%${categoria}%` } } : null;
    Comercio.findAll({ where: condicion }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving commerces"
        });
    });
};


//Obtener comercio por ID
exports.findOne = (req, res) => {
    const id = req.params.id;
    Comercio.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find commerces with id=${id}`
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving commerces with id=" + id
            });
        });
};


//Actualizar los datos de un comercio por su ID
exports.update = (req, res) => {
    const id = req.params.id;

    Comercio.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Comercio was updated successfully." });
            } else {
                res.send({ message: `Cannot update Comercio with id=${id}. Maybe Comercio was not found or req.body is empty!` });
            }
        }).catch(err => {
            res.status(500).send({
                message: "Error updating Comercio with id=" + id
            });
        });
};


//Eliminar un comercio de la base de datos por su ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Comercio.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Comercio was deleted successfully!" });
            } else {
                res.send({ message: `Cannot delete Comercio with id=${id}. Maybe Comercio was not found!` });
            }
        }).catch(err => {
            res.status(500).send({
                message: "Could not delete Comercio with id=" + id
            });
        });
};