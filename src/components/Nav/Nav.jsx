
import { Link } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';


export default function Nav({ onSearch, random }) {
  const location = useLocation(); // Obtiene el objeto location

  return (
    <div className={styles.pageContainer}>
    <nav className={styles.navContainer}>
       {location.pathname === '/home' && (
                    <SearchBar onSearch={onSearch} random={random} />
                )}

      {/* Botón para ir a la ruta '/home' */}
      <Link to="/home" className={styles.navLink}>
        <button className={styles.button}>Home</button>
      </Link>

      {/* Botón para ir a la ruta '/about' */}
      <Link to="/about" className={styles.navLink}>
        <button className={styles.button}>About</button>
      </Link>

      <Link to="/favorites" className={styles.navLink}>
        <button className={styles.button}>Favorites</button>
      </Link>



    </nav>
</div>
  );
}
  

