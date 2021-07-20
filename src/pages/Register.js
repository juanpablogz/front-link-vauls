import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';


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
      console.log(error)
    }
  }
  return (
      <RegisterForm register={register}/>
  )
}
