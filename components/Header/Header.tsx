import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Account } from '../account';
import { WalletOptions } from '../../utils/wallet-options';
import { useAccount } from 'wagmi';


function ConnectWallet() { 
    const { isConnected } = useAccount() 
    if (isConnected) return <Account /> 
    return <WalletOptions /> 
  } 

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <ConnectWallet />
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo Here
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;