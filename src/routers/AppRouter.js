import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar } from '../components/Navbar'
import { index } from '../pages/Index'
import { Register } from '../pages/Register'


export default function AppRouter() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path="/" component={index}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </Router>
  )
}
