const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d).{6,10}$/;

const validation = (userData)=> {

    const errors = {}
    if (!userData.email) errors.email = "El email es requerido";
    else if (!emailRegex.test(userData.email)) { // Agregar .test() aquí
        errors.email = "El formato del correo electrónico es inválido";
      } else if (userData.email.length > 35) {
        errors.email = "El email no puede tener más de 35 caracteres";
      }



    else if (!userData.password) errors.password = "La contraseña es requerida";
    else if (!passwordRegex.test(userData.password)) {
        errors.password = "La contraseña debe tener al menos un número y tener una longitud entre 6 y 10 caracteres";
    }

    return errors;


}

export default validation;