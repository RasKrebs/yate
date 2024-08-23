import React from 'react';
import { Stack, Button, TextField, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Creative = () => {
  return (
    <Stack>
      <div className="h-screen flex justify-center items-center w-[100%]">
        <form className='grid items-center justify-center
        border-[1.5px] rounded-2xl hover:border-slate-300 
        transition-colors w-[350px] h-[120px] h-[400px]'>
          <TextField id="outlined-basic" label="Describe your art" variant="outlined" />
          <Button variant='outlined'>Durum</Button>
        </form>
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
  </Stack>
  )
};

export default Creative;