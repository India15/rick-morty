import { FcAdvance } from "react-icons/fc"
import style from './SearchBar.module.css'
import {useState} from 'react'

export default function SearchBar({onSearch}) {

// const handleSearch = () => {
// const inputSearch = document.getElementById('inputSearch')
// onSearch(inputSearch.value)
// inputSearch.value = ""
// }

const [id, setId] = useState('')

const handleChange = (event) => {
  // console.log('soy el id:' , event.target.value)
setId(event.target.value)
}

const handleSearch = (id) => {
   onSearch(id)
   setId('')
}

   return (
      <>
      <div>
         <input className={style.input} value ={id} id = 'inputSearch' type='search' placeholder="Ingresa un ID" onChange={handleChange}/>
         <button onClick={()=>handleSearch(id)}><FcAdvance/></button>
      </div>
      
      </>
   );
}


