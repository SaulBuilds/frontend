import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const EBitCreationExplainer: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        The Power of the E-Bit
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        An <strong>e-bit</strong> (entangled bit) is a pair of particles that are entangled in such a way that the state of one (whether it`s spin up or spin down) instantly determines the state of the other, regardless of the distance separating them.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        In the context of our game, sharing an e-bit allows two players to coordinate their strategies more effectively than classical communication would permit. This quantum advantage can lead to winning outcomes that defy classical expectations.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Creating and using an e-bit is like having a secret conversation that is not just secure but also fundamentally beyond the reach of classical physics. It`s quantum mechanics in action!
      </Typography>
      <Button variant="contained" onClick={onNext}>Explore the Game</Button>
    </Box>
  );
};

export default EBitCreationExplainer;
