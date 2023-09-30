const { User } = require ("../connection");

//controlador
const postUser = async (req, res) =>{
  
        // Verificar si se reciben email y password en el cuerpo de la solicitud
        const { email, password } = req.body; //recibir

//estamos haciendo una validacion
        if (!email || !password) {
          // Si falta alguno de los datos, responde con un status 400 y un mensaje de error
         return res.status(400).json({ message: 'Faltan datos' });
       
        }

        try{
            const user = await User.findOrCreate({
                where: { email, password },
                
              });
            
            res.status(201).json(user);
        }
       catch (error){
        res.status(500).json({ message: 'Hubo un error en el servidor' });
      }
       }
    
    
    module.exports = postUser;
  