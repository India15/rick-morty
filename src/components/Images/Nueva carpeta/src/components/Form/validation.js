const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexNum = /\d/;

const validation = (userData) => {

    const errors = {}

    if (!userData.email) errors.email = "El email es requerido"
    else if (!regexMail.test(userData.email)) errors.email = "El email es inválido"
  

    else if (!userData.password) errors.password = "La contraseña es requerida"
    else if (!regexNum.test(userData.password)) errors.password = "La contraseña debe tener al menos 1 numero"

    /*
    let errors = {
        email: "El email es requerido"
    }
    */
    return errors 

}

export default validation 