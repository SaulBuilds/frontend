import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { IntroductionProps } from './PropTypes';

const Introduction: React.FC<IntroductionProps>  = ({ onNext }) => (
  <Box sx={{ textAlign: 'center', my: 4 }}>
    <Typography variant="h4" gutterBottom>Welcome to the CHSH Game!</Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Imagine flipping a coin to make decisions. Simple, right? Now, imagine if these coins could influence each other`s outcome, even miles apart. This game explores such phenomena, diving into the realm where classical physics meets quantum mechanics, revealing the peculiar behavior of quantum entanglement.
    </Typography>
    <Button variant="contained" color="primary" onClick={onNext}>Start Game</Button>
  </Box>
);

export default Introduction;