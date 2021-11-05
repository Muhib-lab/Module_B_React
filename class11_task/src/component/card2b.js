import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Box,Typography} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGridCard2() {
  return (
    <Box sx={{ width: '100%' }} >
      <Grid container rowSpacing={1} style={{border:'2px solid black',marginTop:'30px',height:'350px',marginBottom:'20px'}} 
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>
            <img src="https://img.alicdn.com/tfs/TB1uW2kv3HqK1RjSZFkXXX.WFXa-300-320.png" height='310px' width='288px' alt="" />
          </Item>
        </Grid>

        <Grid item xs={3} >
          <Item >
            <Typography>
              Premium OEM Factories
            </Typography>
            <Typography>
              One stop service for your store
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/HTB1MmzvivDH8KJjy1Xcq6ApdXXab.jpg_220x220.jpg" alt="" />
          </Item>  

        </Grid>
        <Grid item xs={3}>
          <Item>
            <Typography>
              Top Sales
            </Typography>
            <Typography>
             Heavy duty vehicle parts 
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/Hf8eb07728e634764b2cf2d9e47602213T.jpg_220x220.jpg" alt="" />
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item>
          <Typography style={{paddingBottom:'25px'}}>
              Wheels Tyres and Accessories
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/HLB1EO4eSCzqK1RjSZFpq6ykSXXa4.jpg_220x220.jpg" alt="" />

          </Item>
        </Grid>

        <Grid item xs={3} style={{marginLeft:'320px',marginTop:'-180px'}}>
          <Item>
          <Typography>
              Delivery Duty Paid(DDP)
            </Typography>
            <Typography>
              Including shipping and duty fees
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/Hc49556b0ff0c45c28083a180c9c25deaE.jpg_220x220.jpg" alt="" />

         </Item>
        </Grid>

        <Grid item xs={3} style={{marginTop:'-180px'}}>
          <Item>
            <Typography>
              New Energy Vehicles Parts & Accessories
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/HTB1cMLybojrK1RkHFNRq6ySvpXaM.jpg_220x220.jpg" alt="" />
          </Item>
        </Grid>

        <Grid item xs={3} style={{marginTop:'-180px'}}>
          <Item>
            <Typography style={{paddingBottom:'25px'}}>
              Recovery & Off Road Accessories
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/Hcd688f4096e34b00a97bb565e6e5a41eb.jpg_220x220.jpg" alt="" />
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
