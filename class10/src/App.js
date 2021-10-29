import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bulb1 from './images/bulb1.png'
import bulb2 from './images/bulb2.png'
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';

function App() {
  const [val,setVal] = useState(true)

 

  return (
    <div className="App">

      {/* <div> {val ? <img src={bulb1} /> : <img src={bulb2}  /> } </div>

        <button onClick={ () => setVal (!val) }>Click</button> */}


        <div>
          <Grid>
          <Grid container>
              <Grid md={12} >
                <Typography variant='h4'>
                  skdjskd skdjksmd skdjksd skdjksd ksdjk
                </Typography>
              </Grid>
          </Grid>
          </Grid>
        </div>



    </div>
  );
}

export default App;
