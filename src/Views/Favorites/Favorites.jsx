import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderFav, filterFav } from '../../components/redux/actions';
import Card from '../../components/Card/Card';
import styles from './Favorites.module.css'



const Favorites = ({ onClose }) => {

  const dispatch = useDispatch ();
  
  const [aux, setAux] = React.useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);

  const optionsGender = ["All","Male", "Female", "Genderless","Unknow"]
  


  const handlerOrder =(event) => {
    dispatch (orderFav(event.target.value))
    setAux(!aux)
  }

  const handlerFilter = (event) => {
    dispatch (filterFav(event.target.value))
  
  }

  /*const handlerFilter = (event) => {
    const selectedGender = event.target.value;
    if (selectedGender === "All") {
      dispatch(filterFav(selectedGender));
    } else {
      dispatch(filterFav(selectedGender.toLowerCase())); // Asegúrate de que el valor sea en minúsculas
    }
  };

*/
 
  

 /* if (myFavorites.length === 0) {
    return <div>No hay favoritos.</div>;
  }*/

   
 
  return (
<div>
  <div className={styles.container}>
<select className={styles.select1} onChange={handlerOrder}>
  <option value="Ascendente">Ascendente</option>
  <option value="Descendente">Descendente</option>
</select>

<select className={styles.select2} onChange={handlerFilter}>
{optionsGender.map(option =>
<option key= {option} value= {option}> {option}
</option>
)}
</select>
</div>



    <div>
      {myFavorites.map(char => (
        <Card
          key={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin}
          image={char.image}
          id={char.id}
          onClose={onClose} 
  
        />
      ))}
    </div>
    </div>
    
  );
};

export default Favorites;



