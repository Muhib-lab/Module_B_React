import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { ABOUT , HOME , CONTACT } from ".";


export default function AppRouter() {
  return (
    <Router>
      <div>      
        <Routes>
          <Route path="/" element={<HOME />} />
            
        
          <Route path="/about" />
          
          

        </Routes>
      </div>
    </Router>
  );
}

