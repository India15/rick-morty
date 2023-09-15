
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

const Detail = () => {
  // Obtenemos el ID del personaje de la URL utilizando el hook useParams
  const { id } = useParams();
  console.log("ID del personaje:", id);

  // Aquí puedes utilizar el ID para realizar cualquier acción que necesites,
  // como obtener los detalles del personaje de la API usando Axios

  const [character, setCharacter] = useState({});
  
  //lo que se haga aquí se montará primero
  useEffect(() => {
    // Realizar la solicitud a la API para obtener los detalles del personaje
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          // Si se obtienen los datos correctamente, actualiza el estado con los detalles del personaje
          setCharacter(data);
        } else {
          // Si no se encuentra el personaje, mostrar una alerta
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((error) => {
        // Manejar errores de solicitud
        console.error('Error al obtener la información del personaje:', error);
        window.alert('Hubo un error al cargar la información del personaje');
      });
      //cuando el componente se desmonte hara que la inf. se setee y qde en su estado original
      return setCharacter ({});
  }, [id]); //si hay un cambio en el id , todo lo de arriba se vuelve a repetir

  return (
<div className={styles.detail_card}>
      <div className={styles.img_container}>

      {character.image ? (
            <img src={character.image} alt={character.name} />
          ) : (
            <h2>Image not available</h2>
          )}

      </div>
      <div className={styles.info_container}>
          {character.name ? <h2>Name: {character.name}</h2> : <h2>Name: N/A</h2>}
          {character.status ? <h2>Status: {character.status}</h2> : <h2>Status: N/A</h2>}
          {character.species ? <h2>Species: {character.species}</h2> : <h2>Species: N/A</h2>}
          {character.gender ? <h2>Gender: {character.gender}</h2> : <h2>Gender: N/A</h2>}
          {character.origin && character.origin.name ? (
            <h2>Origin: {character.origin.name}</h2>
          ) : (
            <h2>Origin: N/A</h2>
          )}
      </div>
      </div>
      );
    };
    


export default Detail;
