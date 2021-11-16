import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import AppRouter from './config/router/router';

// .................................................hooks   1) USE EFFECT



function App() {
  // const [name,setName] = useState("");

  // useEffect(()=>{
  //   console.log("heelo use effect")
  // },[name])



  return (
    <div className="App">
     <AppRouter />
    

    </div>
  );
}

export default App;
