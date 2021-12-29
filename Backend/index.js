//Importamos la librería express, que habremos instalado antes
//con npm install express
const express = require("express");

const cors = require("cors");

//Creamos una costante para empezar a usar express
const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};


app.use(cors(corsOptions));


//Se puede usar express para contenidos de tipo aplication/json
app.use(express.json());


//Se puede usar express para contenidos de tipo aplication/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//Inicializamos Sequelize aplicando la configuración del archivo models/index.js
const db = require("./models");


//Usando el force: true borraremos las tablas existentes y las creamos de nuevo
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync data base")
})


//Tenemos un end-point que está escuchando en http://localhost:8080/
//y nos devolverá un mensaje en formato JSON
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Rural Core application" });
});


//Importamos las rutas creadas en el archivo routes/comercio.routes.js
require("./routes/comercio.routes")(app);
//Importamos las rutas creadas en el archivo routes/categoria.routes.js
require("./routes/categoria.routes")(app);


//Arrancamos nuestra API que estará escuchando en el puerto 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});