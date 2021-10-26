import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';



function App() {
  // const [data,setData] = useState([{
  //   name:'Muhib',
  //   type:'Men',
  //   price:'550'
  // }])

  return (
    <div className="App">
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 p-5 bg-primary'>
          </div>
          <div className='col-md-7 p-5 bg-info'>
          <Button  startIcon={<DeleteIcon />}  variant="contained">Contained</Button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;


