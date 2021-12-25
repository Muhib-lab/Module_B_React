import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Home,About,Contact,Error,Signin,Signup} from './index'

export default function RouterApp() {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/signin' element={<Signin/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
          
        </Router>
      );
    }
  