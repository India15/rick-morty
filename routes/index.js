const router = require('express').Router(); //se crea un enrutador

const logins = require('../controllers/logins');
const getCharById = require('../controllers/getCharById');
const deleteFav = require('../controllers/deleteFav');
const postFav = require ('../controllers/postFav');
const postUser = require ('../controllers/postUser');

// Se definen las rutas y se asocian a las funciones controladoras correspondientes:
router.get('/character/:id', getCharById); // Ruta para obtener un personaje por ID - 1paso la ruta- 2 paso el controller
router.get('/login', logins); // Ruta para el inicio de sesión
router.post('/login',postUser);
router.delete('/fav/:id', deleteFav);
router.post('/fav', postFav)


module.exports = router; // Exportamos el enrutador
