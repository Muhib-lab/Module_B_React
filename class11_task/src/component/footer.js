import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation style={{backgroundColor:'darkgrey'}} sx={{ width: '100%' }} value={value} onChange={handleChange}>
    <Typography>
    Trade Alert - Delivering the latest product trends and industry news straight to your inbox.
    </Typography> <br />
      <div>
          <br />
          <input size='30' type="text" /> <button>SUBSCRIBE</button>
      </div>
     
     
      
    </BottomNavigation>
  );
}
