import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV} from "./action-types";
import axios from "axios";



export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character);
      
      return dispatch({
        type: ADD_FAV,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error al agregar el personaje a favoritos:', error);
      
    }
  };
};



/*export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: ADD_FAV,
           payload: data,
        });
     });
  };
};

  export const removeFav = (id) => {
    return {
      type: REMOVE_FAV,
      payload: id,
    };
  };

  export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 }; */


 export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      
      return dispatch({
        type: REMOVE_FAV,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error al eliminar el personaje de favoritos:', error);
      
    }
  };
};

export const filterFav = (gender) => { //esta estructura es para codigo sincronico, si hay q hacer algo asin como consumir api es otra 
  return {
    type: FILTER_FAV,
    payload: gender,
  };
};

export const orderFav = (order) => {
  return {
    type: ORDER_FAV,
    payload: order,
  };
};



  
  