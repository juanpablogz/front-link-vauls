import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <Fragment>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/register" activeClassName="active">Register</NavLink>
        </li>
      </ul>
      </Fragment>
    </div>
  )
}
