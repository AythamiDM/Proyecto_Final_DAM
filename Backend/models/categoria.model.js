//Creamos el modelo de categoria
module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define("categorias", {
        nombre: {
            type: Sequelize.STRING
        }
    });

    return Categoria;
};