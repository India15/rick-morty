import React, {useState} from 'react'
// import {connect} from 'react-redux'
import Card from '../Card/Card.jsx'
import { orderFav, filterFav } from '../../Redux/actions.js'
import { useDispatch, useSelector } from 'react-redux'

function Favorites() {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const myFavorites = useSelector(state => state.myFavorites)

    const optionGender = ["All", "Male", "Female", "unknown", "Genderless"]

    const handleOrder = (event) => {
        dispatch(orderFav(event.target.value))
        setAux(!aux)
    }

    const filterCards = (event) => {
        dispatch(filterFav(event.target.value))
    }
return(
    <div>

        <select onChange = {handleOrder}>
            <option value="Ascendente">ASCEDENTE</option>
            <option value="Descendente">DESCENDENTE</option>
        </select>

        <select onChange={filterCards}>
            {optionGender.map(option => 
                <option value={option} key={option}>{option}</option>)}
        </select>


        {myFavorites?.map(({name, status, species, image, id})=> (
            <Card
            key={id}
            name={name}
            id={id}
            status={status}
            species={species}
            image={image}
            />  
        )) }
    </div>
)
}

// function mapStateToProps(state){
//     return {
//         myFavorites: state.myFavorites
//     }
// }
// export default connect (mapStateToProps)(Favorites)

export default Favorites
