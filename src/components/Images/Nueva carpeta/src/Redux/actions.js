import {ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER} from './action-types'

// action creators y las actions

export const addFav = (character) => {
    return {
        type: ADD_FAVORITE,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    }
}

export const filterFav = (gender) => {
return {
    type: FILTER,
    payload: gender
}
}

export const orderFav = (order) => {
return {
    type: ORDER,
    payload: order
}
}

//!  ACTION --> objeto recibiendo el reducer
// {type: ADD_FAVORITE, payload: character}

//! Action Creator --> funcion que envia a la action al reducer, en el componente yo lo utilizo