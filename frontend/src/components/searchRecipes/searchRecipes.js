import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicTextFields() {

  return (
    <>
    <h2>Search Recipes</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="Ingredient1" label="Ingredient1" variant="outlined" />
      <TextField id="Ingredient2" label="Ingredient2" variant="outlined" />
      <TextField id="Ingredient3" label="Ingredient3" variant="outlined" />
      <TextField id="Ingredient4" label="Ingredient4" variant="outlined" />
      <TextField id="Ingredient5" label="Ingredient5" variant="outlined" />
      <Button variant="contained">Search For Recipes</Button>

    </Box>
    </>
  );
}
