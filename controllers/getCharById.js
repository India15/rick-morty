

/*const axios = require('axios');

// Definimos la URL base de la API de "Rick and Morty"
const URL = "https://rickandmortyapi.com/api/character/";

// Definimos la función del controlador getCharById, que lo que hace es ir a buscar los datos
const getCharById = (req, res) => {
  // Obtenemos el ID del personaje desde los parámetros de la URL
  const id = req.params.id;

  // Realizamos la petición a la API
  axios(`${URL}${id}`)
    .then(({ data }) => {
      if (data.name) {
        const { id, status, name, species, origin, image, gender } = data;
        const character = { id, status, name, species, origin, image, gender };
        res.status(200).json(character);
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

module.exports = getCharById ; */


const axios = require('axios');

//este controller // la funcion se encarga de obtener datos de un personaje por su id

// Definimos la URL base de la API de "Rick and Morty"
const URL = "https://rickandmortyapi.com/api/character/";

// Definimos la función del controlador getCharById, que lo que hace es ir a buscar los datos
const getCharById = async (req, res) => {
  try {
    // Obtenemos el ID del personaje desde los parámetros de la URL
    const id = req.params.id;

    // Realizamos la petición a la API
    const response = await axios(`${URL}${id}`);
    
    if (response.data.name) {
      const { id, status, name, species, origin, image, gender } = response.data;
      const character = { id, status, name, species, origin, image, gender };
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;


