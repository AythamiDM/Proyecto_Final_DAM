//Configuramos sequelize para utilizar MySQL
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "aythami1992",
    DB: "ruralcore",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};