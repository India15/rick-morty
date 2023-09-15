import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../components/redux/actions';
import styles from './Card.module.css'; 


export default function Card(props) {
  // props = {id, name, status, onClose ...}
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(!isFav);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(!isFav);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className={styles.card_container}>
    <div className={styles.card_content}> 
      {isFav ? (
        <button className={styles.buttonc} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={styles.buttonc} onClick={handleFavorite}>🤍</button>
      )}
      {/* ejecutamos la función onClose pasandole como parametro el id del personaje a eliminar */}
      <button className={styles.buttonx} onClick={() => props.onClose(props.id)}>X</button>
      <div className={styles.name}>
        <h2>{props.name}/{props.id}</h2>
      </div>

      <Link to={`/detail/${props.id}`} className={styles['info-link']}>
        <p className={styles['info-link-text']}>+info</p>
      </Link>
      <div class={styles['img-container']}>
        <img className={styles.img} src={props.image} alt={props.name} />
      </div>
      </div>
      </div>
  );
}