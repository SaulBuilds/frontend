import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { GameConclusionProps } from './PropTypes';``
const GameConclusion: React.FC<GameConclusionProps> = ({ result, onRestart }) => (
  <Box sx={{ textAlign: 'center', my: 4 }}>
    <Typography variant="h5" gutterBottom>Game Outcome</Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      {result}. This outcome demonstrates the power of quantum strategies, leveraging the enigmatic properties of quantum entanglement to achieve results beyond classical constraints. It`s a glimpse into the potential of quantum information science.
    </Typography>
    <Button variant="contained" color="primary" onClick={onRestart}>Restart Game</Button>
  </Box>
);

export default GameConclusion;