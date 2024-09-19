import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'


function Login() {
  return (
    <Stack spacing={1}
      sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '30%',
        alignItems: 'center',
        marginTop: '3%'
      }}
    >
        <img 
          src="slack logo.svg" 
          alt=""
          width="112px"
        />

        <h1
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '3rem',
            width: '40rem',
            marginTop: '1.25rem'}}
        >Sign in to Slack</h1>

        <p 
          style={{ 
            fontWeight: '500',
            marginTop: '1rem'
          }}>
          We suggest using the  
          <span 
            style={{ 
              fontWeight: 'bold'     
            }}>
              email address that you use at work.
          </span>
        </p>

        <TextField id="outlined-basic" label="name@work-mail.com" type="email" variant="outlined" 
          sx={{
            width: "90%",
            marginTop: "30px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              height: "50px"
            },
            "& .MuiInputBase-input::placeholder": {
                color: "#454245",
                opacity: 0.50,
            },
          }}
        />

        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
          sx={{
            width: "90%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              height: "50px"
            },
            "& .MuiInputBase-input::placeholder": {
                color: "#454245",
                opacity: 0.50,
            },
          }}
        />

        <Button variant="contained"
          sx={{
            width: "90%",
            borderRadius: "12px",
            bgcolor: "#611f69",
            height: "45px",
            fontSize: "17px",
            textTransform: "none",
            boxShadow: "none",
            marginTop: "12px",
          }}
        >Login</Button>

        <Divider
          sx={{ 
            width: "90%",
            textAlign: "center", 
            marginTop: "5px"
          }}        
        >
            <Chip label="OR" size="small" />
        </Divider>

        <Button variant="outlined"
          sx={{
            color: "black",
            width: "90%",
            borderColor: "#b6b6b7",
            borderRadius: "12px",
            height: "45px",
            borderWidth: "2px"
          }}
        >Continue with Google</Button>

        <Button variant="outlined"
          sx={{
            color: "black",
            width: "90%",
            borderColor: "#b6b6b7",
            borderRadius: "12px",
            height: "45px",
            borderWidth: "2px"
          }}
        >Continue with Apple</Button>

        <p>New to Slack</p>
        <p>Create an account</p>
    </Stack> 
  )
}

export default Login