import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Navbar = ({userName, isDarkMode, setIsDarkMode, logout}) => { 
    
    const navigate = useNavigate()
    const toHome = () => navigate('/') 
    const toProfile = () => navigate('/profile') 
    return (
    <Box sx={{flexGrow: 1}}>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' sx={{flexGrow: 1}} onClick = {toHome}> MIWA </Typography>
                <Box display="flex" alignItems="center" justifyContent="center" gap="1rem" >

                <Typography variant='h5' sx={{flexGrow: 1}} onClick = {toProfile}> {userName} </Typography>
                <IconButton
                    onClick={
                        () => setIsDarkMode(!isDarkMode)
                    } 
                    >
                   { isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                {userName !== "" && <IconButton onClick={logout} >
                    <LogoutIcon />
                    </IconButton>}
                        </Box>
                    </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar