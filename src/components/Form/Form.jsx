import React from 'react';
import { useState } from 'react';
import validation from '../Validation/validation.js';
import styles from "./Form.module.css"; 

const ComponentForm = ({login}) => {
 
  const [userData, setUserData] = useState({
    email: '',
    password: '' 
  });

 const [errors, setErrors] = useState({})

  //Cuando un evento (por ejemplo, un cambio en un campo de entrada) ocurre, se pasa como parámetro a la función handleChange.

const handleChange = (event) =>{  //manejar cambios en los valores de entrada (inputs) y actualizar el estado de un componente
let property = event.target.name//se extrae el nombre de la propiedad (campo de entrada) que desencadenó el evento 
let value = event.target.value//se obtiene el valor actual del campo de entrada que cambió 

setErrors(validation({...userData, [property]: value}))
setUserData({...userData, [property]: value})    //el modificador //property es email o password y el value es cada una de las letras q se escribe
}

const handleSubmit = (event) =>{
event.preventDefault()
login(userData)
//y ahora a donde queremos que se envie 
}

return (

  <div className={styles.container}>

<div className={styles.leftImage}>
          <img className={styles.image} src={require('../../components/Images/N.png')} alt="Imagen" />
        </div>
     <div className={styles.pageContent}>
    <div className={styles.formBox}>
      <form onSubmit={handleSubmit}>


  
        <div className={styles.imageContainer}>
          <img className={styles.image1} src={require('../../components/Images/list-rick-and-morty-episodes-wikipedia-24.png')} alt="Imagen" />
        </div>
      
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input className={styles.input}
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
          {errors.email && (<p>{errors.email}</p>)}

        <label htmlFor="password" className={styles.label}>Password:</label>
        <input  className={styles.input}
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
          {errors.password && (<p>{errors.password}</p>)}

        <button className={styles.button} type="submit">INGRESAR</button>
      </form>
      </div>
    </div>
    </div>
  
  );
}

export default ComponentForm;
