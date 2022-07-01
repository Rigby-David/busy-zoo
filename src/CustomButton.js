import Button from '@mui/material/Button';
import React from 'react';

export default function CustomButton({
  onClick, children, color = 'red', border = 'black solid 2px', margin = '5px',
}) {
  return (
    <Button variant='contained' onClick={onClick}
      sx={{
        background: color,
        border: border,
        margin: margin,
        
      }}>
      {children}
    </Button>
  );
}

