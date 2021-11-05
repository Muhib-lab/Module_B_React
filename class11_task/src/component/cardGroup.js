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

export default function ColumnsGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={4}>
          <Item>
              <img height='190px' width='180px' src={props.image1} alt="" />
              <Typography>{props.para1}</Typography>
              <Typography>{props.price1}</Typography>
              <Typography>{props.title1}</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <img height='213px' width='180px' src={props.image2} alt="" />
              <Typography>{props.para2}</Typography>
              <Typography>{props.price2}</Typography>
              <Typography>{props.title2}</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <img height='190px' width='180px' src={props.image3} alt="" />
              <Typography>{props.para3}</Typography>
              <Typography>{props.price3}</Typography>
              <Typography>{props.title3}</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <img height='213px' width='180px' src={props.image4} alt="" />
              <Typography>{props.para4}</Typography>
              <Typography>{props.price4}</Typography>
              <Typography>{props.title4}</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
