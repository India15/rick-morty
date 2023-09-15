
import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV} from "./action-types";

const initialState = {
    myFavorites: [],
    allFavorites: [],
    detail: {},
  };

const rootReducer =(state = initialState, action) =>{
    switch (action.type) {
        /*case ADD_FAV:
            return {
                    ...state,
                    myFavorites: [...state.myFavorites, action.payload],
                    allFavorite: [...state.allFavorite, action.payload],

            }*/

    case ADD_FAV:
    return {
    ...state,
    myFavorites: action.payload,
    allFavorites: action.payload,
    };

        /*case REMOVE_FAV:
                return {
                    ...state,
                    myFavorites: state.myFavorites.filter ( char=> char.id !== action.payload)
                }*/
   case REMOVE_FAV:
   return {
   ...state,
  myFavorites: action.payload,
  allFavorites: action.payload,
   };
 
        /*case FILTER_FAV:
                let favoriteFiltered;
                if (action.payload === "All") {
                  favoriteFiltered = state.allFavorite;
                } else {
                  favoriteFiltered = state.allFavorite.filter(char => char.gender === action.payload);
                }
                return {
                  ...state,
                  myFavorites: favoriteFiltered
                }*/
  case FILTER_FAV:
               /*let favoriteFiltered;
              if (action.payload === "All") {
             favoriteFiltered = [...state.allFavorites]; // Copia el arreglo
             } else {
            favoriteFiltered = state.allFavorites.filter(char => char.gender === action.payload);
            }
            return {
           ...state,
            myFavorites: favoriteFiltered
          };*/
  return {
  ...state,
  myFavorites: action.payload === "All" ? [...state.allFavorites]:
  state.allFavorites.filter((character)=> character.gender === action.payload),
         };

  case ORDER_FAV:
                 /* let favoritesOrdered = state.myFavorites.sort((a, b) => {
                return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
            })
            return {
                ...state,
                myFavorites: favoritesOrdered
            }*/
  let ordered = [];
 if (action.payload === "Ascendente"){
 ordered = state.myFavorites.sort((a,b) => (a.id > b.id ? 1 : -1));
 } else {
ordered = state.myFavorites.sort((a,b)=>(b.id > a.id ? 1 : -1)); 
}  return {
...state,
 myFavorites: [...ordered],
};

            default:
            return {...state}
    }
}





export default rootReducer; 
