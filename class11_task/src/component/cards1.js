import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CardsNested1(props) {
  return (
    <Box  sx={{ width: '100%', margin:3 , marginTop : 6}}  >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
      style={{border:'2px solid darkGrey', borderRadius:'8px' ,padding:'5px',height:'270px'}}>
        <Grid item xs={8}>
          <Item>
              <Typography variant='h5'>
                  {props.title} 
              </Typography>
              <Typography>
                  {props.title1}
              </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
              <img src={props.image1} width='90px' alt="" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Typography style={{fontWeight:'bold',marginBottom:'10px'}}>
                {props.title2}
            </Typography>
              <img width='50px' src={props.image2a} alt="" />
              <img width='50px' src={props.image2b} alt="" />
              <img width='50px' src={props.image2c} alt="" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Typography style={{fontWeight:'bold',marginBottom:'10px'}}>
                {props.title3}
            </Typography>
            <img width='50px' src={props.image3a} alt="" />
              <img width='50px' src={props.image3b} alt="" />
              <img width='50px' src={props.image3c} alt="" />

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
