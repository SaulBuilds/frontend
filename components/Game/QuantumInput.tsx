import React from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';
import { QuantumInputProps } from './PropTypes';



const QuantumInput: React.FC<QuantumInputProps> = ({ onInputChange, onSubmit }) => (
  <Box sx={{ textAlign: 'center', my: 4 }}>
    <Typography variant="h5" gutterBottom>Quantum Strategy</Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      With quantum entanglement, our choices are no longer independent. The outcome of one coin can influence the other, enabling strategies that surpass classical limitations. Choose how you`ll use this quantum advantage.
    </Typography>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <TextField
        type="number"
        label="Alice's Quantum Input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, 'alice')}
        />      
        <TextField 
        type="number" 
        label="Bob's Quantum Input" 
        variant="outlined" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, 'bob')} 
        />  
        </Box>
    <Button variant="contained" color="primary" onClick={() => onSubmit()}>Submit Quantum Strategy</Button>
  </Box>
);

export default QuantumInput;
