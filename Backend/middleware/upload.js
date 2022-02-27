//importamos el módulo de multer
const multer = require("multer");

//configuramos multer para usar el motor de almacenamiento en disco
//y creamos un filtro para que solo se puedan subir imagenes
const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Solo se pueden cargar imagenes", false);
    }
};

var storage = multer.diskStorage({
    //determina la carpeta para almacenar los archivos cargados
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/");
    },
    //determina el nombre del archivo dentro de la carpeta de destino
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-ruralCore-${file.originalname}`);
    }

    //NOTA: Agregamos el prefijo [timestamp]-ruralCore- al nombre original
    //del archivo para asegurarnos de que nunca se produzcan duplicados
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;