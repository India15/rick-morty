import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Title, CardContainer, Image, Label, Container} from './styledDetail.js'

function Detail() {

  //! que es params? {id: 3} ROUTE /:id

  const {id} = useParams()

  const [characterDetail, setCharacterDetail] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacterDetail(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacterDetail({}); // wilUnmount -> cuando me retire de detail
 }, [id]);


  return (
    <Container>
 {characterDetail ? (
  <CardContainer> 
     <Title style={{color: "white"}}>Nombre: {characterDetail.name} </Title>
     <Image src={characterDetail.image} alt=""/>
     <Label>{characterDetail.status}</Label>
     <Label>{characterDetail.species}</Label>
     <Label>{characterDetail.gender}</Label>
     <Label>{characterDetail.origin?.name}</Label>
  </CardContainer>
 ) : <h3> Loading ...</h3>}
    </Container>
  )
}

export default Detail

/*

app.js

ROUTE
/detail/:id
params {id: }

card.js
LINK
/detail/3

detail.js
const {id} = useParams() ---> id = 3


*/