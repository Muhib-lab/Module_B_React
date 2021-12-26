import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import {Home, Signin, Signup, Error } from "./index";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

