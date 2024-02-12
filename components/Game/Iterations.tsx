import React, { useState } from 'react';
import { Box, Typography, Slider, Button } from '@mui/material';

interface IterationSelectorProps {
  onIterationSelect: (iterationCount: number) => void;
  iterations: number;
}

const IterationSelector: React.FC<IterationSelectorProps> = ({ onIterationSelect }) => {
  const [value, setValue] = useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        Number of Iterations
      </Typography>
      <Slider
        value={value}
        min={10}
        max={10000}
        step={10}
        marks
        valueLabelDisplay="auto"
        onChange={handleChange}
        aria-labelledby="input-slider"
      />
      <Button onClick={() => onIterationSelect(value)} variant="contained" sx={{ mt: 2 }}>
        Start Simulation
      </Button>
    </Box>
  );
};

export default IterationSelector;
