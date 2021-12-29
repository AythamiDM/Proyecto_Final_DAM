//Creamos el modelo de comercio
module.exports = (sequelize, Sequelize) => {
    const Comercio = sequelize.define("comercios", {
        nombre: {
            type: Sequelize.STRING
        },
        direccion: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        cif: {
            type: Sequelize.STRING
        },
        categoria: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });

    return Comercio;
};