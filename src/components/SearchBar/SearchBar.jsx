import { useState } from "react";
import styles from "./SearchBar.module.css";



export default function SearchBar(props) {
   const { onSearch } = props;
 const [character, setCharacter] = useState(0);

const handleSearch = (event) => {
  let { value } = event.target;
  setCharacter(value);
};


   return (
     <div className={styles.searchBarContainer}>
       <input className= {styles.input} type='search' onChange={handleSearch} />
       <button className={styles.button} onClick={()=> onSearch(character)}>
        Agregar</button>
        <button className={styles.button} onClick={props.random}>
        Random Character</button>
       
     </div>
   );
 }
 
