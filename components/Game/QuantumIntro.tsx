import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { IntroductionProps } from './PropTypes';
const QuantumIntro: React.FC<IntroductionProps> = ({ onNext }) => (
  <Box sx={{ textAlign: 'center', my: 4 }}>
    <Typography variant="h5" gutterBottom>Entering the Quantum World</Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Now, let`s imagine our coin flips are entangled in the quantum realm. Flipping one coin can instantaneously affect the other, no matter the distance. This concept challenges our classical understanding and opens up new strategies for our game.
    </Typography>
    <Button variant="contained" color="primary" onClick={onNext}>Proceed to Quantum Strategy</Button>
  </Box>
);

export default QuantumIntro;
