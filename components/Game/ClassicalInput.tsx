import React from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';
import { ClassicalInputProps } from './PropTypes';


const ClassicalInput: React.FC<ClassicalInputProps> = ({ onInputChange, onSubmit }) => (
  <Box sx={{ textAlign: 'center', my: 4 }}>
    <Typography variant="h5" gutterBottom>Classical Strategy</Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      In a classical world, our coin flips are independent. Your choices here mimic that independence. Choose your inputs as if flipping your own coin, unaffected by others.
    </Typography>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField type="number" label="Alice's Input" variant="outlined"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, 'alice')}/>
      <TextField type="number" label="Bob's Input" variant="outlined" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, 'bob')}/>
    </Box>
    <Button variant="contained" color="primary" onClick={() => onSubmit()}>Submit Classical Strategy</Button>
  </Box>
);

export default ClassicalInput;
