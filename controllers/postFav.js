const { Favorite } = require("../connection");


async function postFav(req, res) {
  
      // Obtiene las propiedades del cuerpo de la solicitud (Body)
      const { name, origin, status, image, species, gender } = req.body;
  
      // Valida que todos los datos estén presentes
      if (!name || !origin || !status || !image || !species || !gender) {
        // Si falta alguno de los datos, responde con un status 401 y un mensaje de error
        return res.status(401).json({ message: 'Faltan datos' });
      }

      try {
      // Guarda el personaje favorito en la base de datos
     await Favorite.findOrCreate({
        where: { id, name, origin, status, image, species, gender },
      });
  
      // Busca todos los personajes favoritos guardados en la base de datos
      const allFavorites = await Favorite.findAll();
  
      // Responde con el arreglo de todos los personajes favoritos
      res.status(200).json(allFavorites);
    } catch (error) {
      res.status(500).json({ message: 'Hubo un error en el servidor', error });
    }
  }
 
  module.exports = postFav;