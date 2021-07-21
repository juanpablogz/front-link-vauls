import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar } from '../components/Navbar'
import { home } from '../pages/Home'
import { index } from '../pages/Index'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'


export default function AppRouter() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path="/" component={index}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/home" component={home}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
  )
}
