/**
 * Inicializamos sequelize aplicando la configuración que
 * hemos realizado en el archivo db.config.js e indicamos
 * los modelos
 */
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    //operatorsAliases no admitirá booleanos por lo que
    // pondremos 1 en vez de true y 0 en vez de false
    operatorsAliases: 0,
    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.comercios = require("./comercio.model.js")(sequelize, Sequelize);

module.exports = db;