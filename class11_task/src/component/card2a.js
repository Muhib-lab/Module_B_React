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

export default function NestedGridCard1() {
  return (
    <Box sx={{ width: '100%' }} >
      <Grid container rowSpacing={1} style={{border:'2px solid black',marginTop:'30px',height:'350px',marginBottom:'20px'}} 
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>
            <img src="https://img.alicdn.com/tfs/TB1ZXXNIgHqK1RjSZFkXXX.WFXa-300-320.jpg" height='310px' width='288px' alt="" />
          </Item>
        </Grid>

        <Grid item xs={3} >
          <Item >
            <Typography>
              Premium OEM Factories
            </Typography>
            <Typography>
              Customization Service Available
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/H9c6b46a6372f464aa772a501e8982999x.jpg_220x220.jpg" alt="" />
          </Item>  

        </Grid>
        <Grid item xs={3}>
          <Item>
            <Typography>
              Top Sales
            </Typography>
            <Typography>
              Children Clothing
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/Hb727422a49b9430d9129b1f7ae233865G.jpg_220x220.jpg" alt="" />
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item>
          <Typography style={{paddingBottom:'25px'}}>
              Wedding Appereal & Accessories
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/H2d8a5253875b448c931478927406c4dfq.jpg_220x220.jpg" alt="" />

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
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/H85a14f24e0324d0ea235d1dedbb008ff8.jpg_220x220.jpg" alt="" />

         </Item>
        </Grid>

        <Grid item xs={3} style={{marginTop:'-180px'}}>
          <Item>
            <Typography style={{paddingBottom:'25px'}}>
             Mens Clothing
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/HTB1TD8mXK6sK1RjSsrbq6xbDXXa5.jpg_220x220.jpg" alt="" />
          </Item>
        </Grid>

        <Grid item xs={3} style={{marginTop:'-180px'}}>
          <Item>
            <Typography style={{paddingBottom:'25px'}}>
             Sports Wear
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/Hcc98420451124afc817c74455ac5ed43n.jpg_220x220.jpg" alt="" />
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
