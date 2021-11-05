import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CardsNested(props) {
  return (
  

    <Box container sx={{ flexGrow: 1, margin:3,marginTop:6 }} >
      <Grid container spacing={2} columns={6} style={{border:'2px solid darkGrey', borderRadius:'8px' ,padding:'5px',height:'240px'}}>

        <Grid item xs={3} style={{padding:'0px'}}>
        <Typography style={{fontWeight:'bold',marginBottom:'2px'}}>
               {props.title} 
                </Typography>
            
          <Item style={{backgroundColor:'lightGrey',marginRight:'10px'}}>
              <img height='120px' width='80px' src={props.firstImg} alt="" />
          </Item>
          <Typography sx={{marginTop:1}}>
                {props.rupees} <br />
                {props.description}
          </Typography>
        </Grid>
        <Grid item xs={3} style={{padding:'0px'}}>
          <Item style={{backgroundColor:'lightGrey',marginTop:'25px'}}>
          <img width='80px' height='120px' src={props.secondImg} alt="" />

          </Item>
          <Typography sx={{marginTop:1}}>
                {props.rupees} 
                <br />
                {props.description1}
          </Typography>
        </Grid>
    </Grid>
    </Box>



   
  );
}


//.................. 2 card in a row







