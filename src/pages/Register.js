import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { RegisterForm } from './components/RegisterForm';

export const Register = () => {
  const [headers, setHeaders] = useState([])
  const history = useHistory()
  async function register(values) {
    let user = {
      "email": values.Email,
      "password": values.password,
      "username": values.Username
    }
    console.log(user)
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/v1/users/', {user})
      console.log(response)
      setHeaders(response.headers)
      localStorage.setItem('headers', JSON.stringify(response.headers))
      console.log(headers)
      history.push("/")
    } catch (error) {
      console.log('entre')
      console.log(error)
    }
  }
  return (
      <RegisterForm register={register}/>
  )
}

// import axios from 'axios';
// import React, { useState } from 'react'
// import { RegisterForm } from './components/RegisterForm';

// export const Register = () => {
//   const [headers, setHeaders] = useState([])
//   const register = (value) => {
//     let user = {
//       "email": value.Email,
//       "password": value.password,
//       "username": value.Username
//     }
//    axios.post('http://127.0.0.1:3000/api/v1/users', {user})
//     .then(res => {
//       console.log(res)
//     })
//   }
//   const handleLogin = (res) => {
//     setHeaders(res.headers)
//     console.log(headers)
//   }
//   return (
//       <RegisterForm register={register}/>
//   )
// }
