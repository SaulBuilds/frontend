import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
import { Button, Modal, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2, 
  };
  

  export function WalletOptions() {
    const { connectors, connect } = useConnect();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <>
        <Button onClick={handleOpen} style={{background: '#004a4a', color: '#fff'}}>Connect Wallet</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="wallet-options-title"
          aria-describedby="wallet-options-description"
        >
          <Box sx={style}>
            <Typography id="wallet-options-title" variant="h6" component="h2">
              Connect to a wallet
            </Typography>
            <Typography id="wallet-options-description" sx={{ mb: 2 }}>
              Select your preferred wallet
            </Typography>
            {connectors.map((connector) => (
              <Card key={connector.id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 51 }}
                  image="/path/to/logo.png"
                  alt={`${connector.name} logo`}
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {connector.name}
                  </Typography>
                </CardContent>
                <Button
                  onClick={() => {
                    connect({ connector });
                    handleClose();
                  }}
                  sx={{ m: 1 }}
                >
                  Connect
                </Button>
              </Card>
            ))}
          </Box>
        </Modal>
      </>
    );
  }