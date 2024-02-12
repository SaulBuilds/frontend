import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const QM_Explainer: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Understanding Quantum Mechanics
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Quantum mechanics introduces us to a world where particles can exist in multiple states at once, a phenomenon known as <strong>superposition</strong>. Imagine flipping a coin that doesn`t land on heads or tails but both at the same time!
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        When particles are <strong>entangled</strong>, the state of one particle instantly influences the state of another, no matter the distance between them. This `spooky action at a distance` defies classical physics and is the cornerstone of quantum mechanics.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        These principles are not just theoretical; they have practical applications, from quantum computing to secure communications, and yes, even to winning games like the one we`re exploring!
      </Typography>
      <Button variant="contained" onClick={onNext}>Next</Button>
    </Box>
  );
};

export default QM_Explainer;
