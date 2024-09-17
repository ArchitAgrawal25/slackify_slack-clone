import React from 'react';
import Stack from '@mui/material/Stack';
import { Avatar, Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Stack>
      <Stack spacing={3}>
        <Avatar alt="Travis Howard" src="man.webp" variant="rounded" sx={{width: '40px', height: '40px'}} />

        <Box>
          <Box>
            <Avatar src="home.svg" variant="rounded" sx={{width: '20px', height: '20px'}} className='invert' />
          </Box>
          <p className='text-[11px] mt-[2px] text-center'>Home</p>
        </Box>

        <Box>
          <Box>
            <Avatar  src="messages.svg" variant="rounded" sx={{width: '22px', height: '20px'}} className='invert' />
          </Box>
          <p className='text-[11px] mt-[2px] text-center'>DMs</p>
        </Box>

        <Box >
          <Box>
            <Avatar  src="bell.svg" variant="rounded" sx={{width: '22px', height: '20px', color: "white"}} className='invert' />
          </Box>
          <p className='text-[11px] mt-[2px] text-center'>Activity</p>
        </Box>

        <Box>
          <Box>
            <Avatar  src="note.svg" variant="rounded" sx={{width: '22px', height: '20px', color: "white", marginLeft: "6px"}} className='invert' />
          </Box>
          <p className='text-[11px] mt-[2px] text-center'>Canvases</p>
        </Box>

        <Box>
          <Box>
            <Avatar  src="more.svg" variant="rounded" sx={{width: '22px', height: '20px', color: "white"}} className='invert' />
          </Box>
          <p className='text-[11px] mt-[2px] text-center'>More</p>
        </Box>
      </Stack>

      <Stack>
        <Box >
          <img src="add.svg" alt="" className='w-15 invert opacity-60 ' />
        </Box>
		<Avatar alt="Travis Howard" src="man.webp" variant="rounded" sx={{width: '40px', height: '40px'}} />
      </Stack>

    </Stack>
  );
};

export default Sidebar;