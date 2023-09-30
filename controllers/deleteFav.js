const { Favorite } = require("../connection");


async function deleteFav(req, res) {
 
    // Obtiene el ID del personaje favorito a eliminar desde los parámetros
    const { id } = req.params;
    try {
  
    // Busca y elimina el personaje favorito por su ID
    await Favorite.destroy({
      where: { id },
    });

    // Busca todos los personajes favoritos restantes en la base de datos
    const allFavorites = await Favorite.findAll();

    // Responde con el arreglo de todos los personajes favoritos actualizados
    res.status(200).json(allFavorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error en el servidor', error });
  }
}

module.exports = deleteFav;