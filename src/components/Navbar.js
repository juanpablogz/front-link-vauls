import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/landing.css";


export const Navbar = () => {
  return (
      <Fragment>
      <img className="logo-nav" src="https://res.cloudinary.com/dutj1bbos/image/upload/v1626812972/b5af65dd9465486da0042f6d44dbc3f5_jz0v5f.png" alt="img"></img>
        <ul>
          <li>
            <NavLink exact to="/login" activeClassName="active">Log in</NavLink>
          </li>
          <li>
            <NavLink  className="button-signup" exact to="/register" activeClassName="active">SIGN UP FREE</NavLink>
          </li>
        </ul>
      </Fragment>
  )
}
