import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function IconButtons() {
  return (
    <>
    <Stack direction="row" spacing={2} position="absolute" left={55}> 
    <IconButton aria-label="delete" background >
        <DeleteIcon sx={{height:30, moveTop:100}}  />
      </IconButton>
      </Stack>

      <Stack position="absolute" left={100} >
      <IconButton aria-label="delete" disabled color="primary">
      <DeleteIcon sx={{height:30, moveTop:100}}/>
      </IconButton>
      </Stack>

      <Stack position="absolute" left={1030}>
      <IconButton color="#0288D1" aria-label="add an alarm">
      <AlarmIcon sx={{height:30, moveTop:100}} />
      </IconButton>
      </Stack>

      <Stack position="absolute" left={970}>
      <IconButton color="#000000" aria-label="add to shopping cart">
      <AddShoppingCartIcon sx={{height:30, moveTop:100}}/>
      </IconButton>
      </Stack>
    </>
  );
}
export default IconButtons;