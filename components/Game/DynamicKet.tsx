import React from 'react';
import { Box, Typography, Slider, Button } from '@mui/material';

interface KetNotationProps {
  numberOfIterations: number;
}

const KetNotationSVG: React.FC<KetNotationProps> = ({ numberOfIterations }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
      <svg width="200" height="50" viewBox="0 0 200 50">
        <text x="10" y="35" style={{ fontSize: '24px' }}>|</text>
        <text x="25" y="35" style={{ fontSize: '24px' }}>{numberOfIterations}</text>
        <text x={`${25 + 10 * numberOfIterations.toString().length}`} y="35" style={{ fontSize: '24px' }}>⟩</text>
      </svg>
    </Box>
  );
};

export default KetNotationSVG;
