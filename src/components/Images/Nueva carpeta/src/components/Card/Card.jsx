import {Button, CardContainer, Title, ButtonCont, Image, Label} from './styled'
import {Link} from 'react-router-dom'
import {addFav, removeFav} from '../../Redux/actions.js'
import {useState, useEffect} from 'react' // React.useState
import {connect} from 'react-redux'

function Card({name, status, gender, species, image, onClose, id, addFavorites, removeFavorites, myFavorites}) {
   // props.addFav

   const [isFav, setIsFav] = useState(false)
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   const handleFavorite = () => {
      if (isFav){
         setIsFav(false)
         removeFavorites(id)
      } else {
         setIsFav(true)
         addFavorites({name, status, gender, species, image, id})
      }
   }

   return (
      <CardContainer>
         <ButtonCont> 
            {/* {
               isFav ? ( <Button onClick={handleFavorite}> 💛 </Button>) 
               : ( <Button onClick={handleFavorite}> 🤍 </Button>) 
            } */}
            
            <Button onClick={handleFavorite}> {isFav? "💛" : "🤍"} </Button>
         <Button close onClick={() => onClose(id)}>❌</Button>
         </ButtonCont>
        <Link to={`/detail/${id}`}> <Title> {name} | {id}</Title> </Link>  
         <Image src={image} alt = {`No se encuentra la imagen de ${name}`}/>
          <ButtonCont> 
         <Label>| {status} |</Label>
         <Label>| {species} |</Label>
         </ButtonCont>
       
      </CardContainer>
   );
}

function mapDispatchToProps(dispatch){
   return {
      addFavorites: function (character){
         dispatch(addFav(character))
      },
      removeFavorites: function (id){
         dispatch(removeFav(id))
      }
   }
}

function mapStateToProps (state){
   return {
      myFavorites : state.myFavorites
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)