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

export default function NestedGridCard() {
  return (
    <Box sx={{ width: '100%' }} >
      <Grid container rowSpacing={1} style={{border:'2px solid black',marginTop:'30px',height:'350px',marginBottom:'20px'}} 
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>
            <img src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png" height='310px' width='288px' alt="" />
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
              Home Audio, Video & Accessories
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/HTB1Y46HKkCWBuNjy0Faq6xUlXXaw.jpg_220x220.jpg" alt="" />
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item>
          <Typography style={{paddingBottom:'25px'}}>
              TV Receiver And Accessories
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/HTB1wzWwJCrqK1RjSZK9q6xyypXaB.jpg_220x220.jpg" alt="" />

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
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/Ha894dab9b3964edca495c88b9a60e750k.jpg_220x220.jpg" alt="" />

         </Item>
        </Grid>

        <Grid item xs={3} style={{marginTop:'-180px'}}>
          <Item>
            <Typography style={{paddingBottom:'25px'}}>
              Speaker And Accessories
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/HTB1yATJaoLrK1Rjy0Fjq6zYXFXav.jpg_220x220.jpg" alt="" />
          </Item>
        </Grid>

        <Grid item xs={3} style={{marginTop:'-180px'}}>
          <Item>
            <Typography style={{paddingBottom:'25px'}}>
              Presentation Equipment
            </Typography>
            <img style={{marginLeft:'160px'}} height='80px' src="https://s.alicdn.com/@sc04/kf/H6dd8fb15d5474cf99bb726c449768f873.jpg_220x220.jpg" alt="" />
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
