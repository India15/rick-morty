import {ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER} from './action-types'

const initialState = {
    myFavorites: [],
    allFavorites: [],
    detail: {}
}


                                           // {type: REMOVE_FAVORITE, payload: id}
function rootReducer (state = initialState, action) {
// estado inicial ---> listado de acciones posibles y como debe modificarse el estado al recibirlas

switch(action.type){
    case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allFavorites: [...state.allFavorites, action.payload]
            }

    case REMOVE_FAVORITE:
        let newFavorites = state.myFavorites.filter(char => char.id !== Number(action.payload))
        return {
            ...state,
            myFavorites: newFavorites,
            allFavorites: newFavorites
            // URL --> "5"
        }

    case FILTER: 

    let favoritesFiltered = action.payload === "All" ? state.allFavorites : state.allFavorites.filter(char => char.gender === action.payload)
    return {
        ...state, 
        myFavorites: favoritesFiltered
    }
    //! Ejemplo solo con propiedad myFavorites
    // myFavorites : [{id: 1, gender: male }, {id:3, gender: female}, {id: 5, gender: male}]
    // select -> male
    // myFavorites : [{id: 1, gender: male }, {id: 5, gender: male}]
    // select -> female
    // myFavorites: []

     //! Ejemplo con propiedad myFavorites y allFavorites
     // myFavorites : [{id: 1, gender: male }, {id:3, gender: female}, {id: 5, gender: male}]
      // allFavorites : [{id: 1, gender: male }, {id:3, gender: female}, {id: 5, gender: male}]
    // select -> filterFav(male)
    // myFavorites : [{id: 1, gender: male }, {id: 5, gender: male}]
    // select -> female
    // myFavorites: [{id:3, gender: female}]

    // FilterGender(male) ----> FilterStatus(alive)

    case ORDER:
    let favoritesOrdered = state.myFavorites.sort((a, b) => {
        return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
    })
    return {
        ...state,
        myFavorites: favoritesOrdered
    }

    default:
        return state

}
}

export default rootReducer