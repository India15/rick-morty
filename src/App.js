import './App.module.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Error from './components/Error/Error.jsx';
import About from './Views/About/About.jsx';
import Detail from './Views/Detail/Detail.jsx';
import ComponentForm from './components/Form/Form.jsx';
import styles from './App.module.css';
import Favorites from './Views/Favorites/Favorites.jsx';
import { removeFav } from './components/redux/actions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = 'tu_email@example.com';
  const PASSWORD = 'contraseña123';
  const dispatch = useDispatch();
  const { id } = useParams();

  /*const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate('/home'); // Navega a la ruta '/home' después de iniciar sesión
    }
  };*/

 /* function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    });
  } */

  
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios.get(`${URL}?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(data);
      
      if (access) {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar el error de inicio de sesión aquí, por ejemplo, mostrar un mensaje al usuario.
    }
  }
  

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const location = useLocation(); // Mueve esta línea aquí

  /*async function onSearch(id) {
    try {
      const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
  
      if (data.name) {
        setCharacters(prevCharacters => [...prevCharacters, data]);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    } catch (error) {
      console.error('Error al obtener la información del personaje:', error);
      window.alert('Hubo un error al cargar la información del personaje');
    }
  }*/
  

  /*function onSearch(id) {
    axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          if (!characters.some(char => char.id === data.id)) {
            setCharacters(prevCharacters => [...prevCharacters, data]);
          } else {
            alert("Personaje repetido, prueba otro ID.");
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((error) => {
        console.error('Error al obtener la información del personaje:', error);
        window.alert('Hubo un error al cargar la información del personaje');
      });
  }*/

  async function onSearch(id) {
    try {
      const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
      
      const data = response.data;
      
      if (data.name) {
        if (!characters.some(char => char.id === data.id)) {
          setCharacters(prevCharacters => [...prevCharacters, data]);
        } else {
          alert("Personaje repetido, prueba otro ID.");
        }
      } else {
        window.alert('No hay personajes con ese ID');
      }
    } catch (error) {
      console.error('Error al obtener la información del personaje:', error);
      window.alert('Hubo un error al cargar la información del personaje');
    }
  }
  



  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
    dispatch(removeFav(id)); // Usa dispatch para llamar a removeFav
  }

  return (
    <div className={styles.homeBackground}>
      <div className='App'>
        <div>
          {location.pathname !== '/' && <Nav onSearch={onSearch} random={random} />}
        </div>
        <div>
          <div>
            <Routes>
              <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
              <Route path="/" element={<ComponentForm login={login} />} />
              <Route path="/about" element={<About />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/favorites" element={<Favorites onClose={onClose} />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
