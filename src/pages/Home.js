import React from 'react'
import useAuth from '../auth/useAuth';

export const Home = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Welcome to app</h1>
      <button onClick={() => logout()}>Cerrar sesion</button>
    </div>
  )
}
