import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'

function SignUp() {
  return (
    <Stack spacing={1}>
        <img src="slack logo.svg" alt=""/>

        <h1>First, enter your email</h1>

        <p>We suggest using the email address that you use at work.</p>
        <TextField id="outlined-basic" label="Enter Full Name" type="text" variant="outlined" />
        <TextField id="outlined-basic" label="name@work-mail.com" type="email" variant="outlined" />
        <TextField id="outlined-basic" label="Enter User Name" type="text" variant="outlined" />
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>

        <Button variant="contained">Continue</Button>

        <Divider>
            <Chip label="OR" size="small" />
        </Divider>

        <Button variant="outlined">Continue with Google</Button>

        <Button variant="outlined">Continue with Apple</Button>

        <p>Already Using Slack?</p>
        <p>Sign in to an existing workspace</p>
    </Stack>
  )
}

export default SignUp