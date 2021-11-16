import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../container/home'
import About from '../container/about'
import Service from "../container/service";
import Contact from "../container/contact";
import Profile from "../container/profile";


export default function AppRouter() {
  return (
    <Router>
        <Switch>
      
      <Route exact pah='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/service' component={Service} />
      <Route path='/contact' component={Contact} />
      <Route path='/profile/:username' component={Profile} />

      </Switch>


    </Router>
  );
}

