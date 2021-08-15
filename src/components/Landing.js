import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/landing.css";
import { Smarphone } from './Smarphone';

export const Landing = () => {
  return (
    <div className="container-landing">
      <h1 className="title">The Only Link You'll Ever Need</h1>
      <h3 className="subtitle">Connect audiences to all of your content with just one link</h3>
      <NavLink  className="get-started" exact to="/register" activeClassName="active">GET STARTED FOR FREE</NavLink>
      <div>
        <p>Already on linkvauls?  
        <NavLink  className="" exact to="/login" activeClassName="active"> Log in</NavLink>
        </p>
      </div>
      <Smarphone/>
    </div>
  )
}
