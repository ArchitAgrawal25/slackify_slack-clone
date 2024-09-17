import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function SearchBar() {
  return (
    <TextField 
        variant="outlined" 
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img 
                  src="search.svg" 
                  alt="search" 
                  style={{ width: 20, height: 20 }} 
                />
              </InputAdornment>
            ),
          }}
    />
  )
}

export default SearchBar