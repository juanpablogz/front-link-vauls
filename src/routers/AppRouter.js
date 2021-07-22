import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthProvider from '../auth/AuthProvider'

import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'
import { index } from '../pages/Index'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
      {/* <Navbar/> */}
        <Switch>
          <Route exact path="/" component={index}/>
          <PublicRoute exact path="/register" component={Register}/>
          <PrivateRoute exact path="/home" component={Home}/>
          <PublicRoute exact path="/login" component={Login}/>
        </Switch>
      </AuthProvider>
    </Router>
  )
}
