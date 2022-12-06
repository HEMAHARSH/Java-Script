import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import IconButtons from './Button';
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import { Stack } from '@mui/system';
import Link from '@mui/material/Link';

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#F06292" ,background:'linear-gradient(to right bottom,#E91E63,#880E4F)'}} >
      <Toolbar>
      <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      >
      <MenuIcon />
      <Stack position="absolute" left={150}>
      <IconButton color="#000000" aria-label="Add Photo Alternate Two Tone Icon">
      <AddPhotoAlternateTwoToneIcon sx={{height:30, moveTop:100}}/>
      </IconButton></Stack>
      <IconButtons />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2,mr:-40,
            color:"yellowgreen",fontFamily:"fantasy", fontSize:40}}>
          IT FAM
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0,ml:40}}>
          <Link href="/login">Login</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;
