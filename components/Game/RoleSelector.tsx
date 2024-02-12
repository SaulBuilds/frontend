import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface RoleSelectionProps {
  onRoleSelect: (role: 'Alice' | 'Bob') => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onRoleSelect }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Choose Your Role
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={() => onRoleSelect('Alice')}
      >
        Play as Alice
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onRoleSelect('Bob')}
      >
        Play as Bob
      </Button>
    </Box>
  );
};


export default RoleSelection;