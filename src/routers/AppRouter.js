import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthProvider from '../auth/AuthProvider'
import AppProvider from '../appContext/AppProvider'

import { Home } from '../pages/Home'
import { index } from '../pages/Index'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { ProfilePage } from '../components/ProfilePage'



export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
      {/* <Navbar/> */}
          <Switch>
            <Route exact path="/" component={index}/>
            <PublicRoute exact path="/register" component={Register}/>
            <PrivateRoute exact path="/home" component={Home}/>
            <PublicRoute exact path="/login" component={Login}/>
            <PublicRoute exact path="/login" component={Login}/>
            <PublicRoute exact path="/:username" component={ProfilePage}/>
          </Switch>
        </AppProvider>
      </AuthProvider>
    </Router>
  )
}
