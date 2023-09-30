const { User } = require("../connection"); // Usar require en lugar de requiere


// Controlador para realizar la autenticación de usuarios
const login = async (req, res) => {
  // Obtiene los datos de email y password desde los parámetros de consulta (Query)
  const { email, password } = req.query;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }

    // Buscar un usuario en la base de datos por email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar si la contraseña coincide
    if (user.password !== password) {
      return res.status(403).json({ message: 'Contraseña incorrecta' });
    }

    // Si las credenciales son correctas, responder con éxito
    res.status(200).json({ access: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error en el servidor' });
  }
};

module.exports = login;

