import React from 'react'
import Stack from '@mui/material/Stack';
import SearchBar from './SearchBar';

function Header() {
  return (
    <Stack direction="row" spacing={2}>
        <Stack direction="row" spacing={2}>
            <img src="left-arrow.svg" alt="" className='w-5' />
            <img src="right-arrow.svg" alt="" />
            <img src="time.svg" alt="" />
            <SearchBar />
        </Stack>
        <img src="help.svg" alt="" />
    </Stack>
  )
}

export default Header