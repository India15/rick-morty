import {useState} from 'react'
import validation from './validation'
import style from './Form.module.css'

export default function Form ({login}) {

const [userData, setUserData] = useState ({
    email: '',
    password: ''
})

const [errors, setErrors] = useState({})

const handleChange = (event) => {
let property = event.target.name // email // password
//console.log("property", property)
let value = event.target.value 
// console.log("value: ", value)
setUserData({...userData, [property]: value})
setErrors(validation({...userData, [property]: value}))
}

// onBlur

/*
userData = {
    email : "",
    pass: "",
}

*/

const handleSubmit = (event) => {
event.preventDefault()
login(userData)
}

    return <div>
        <form onSubmit={handleSubmit}> 
            <label className={style.label}> Email: </label>
            <input type='text' name='email' onChange = {handleChange} value={userData.email} />
            {errors.email && (<p className={style.danger}> {errors.email} </p>)}
            <label className={style.label}> Password: </label>
            <input type='password' name='password'onChange = {handleChange} value = {userData.password} />
            {errors.password && (<p className={style.danger}> {errors.password} </p>)}
            <button> SUBMIT </button>
        </form>
    </div>
}