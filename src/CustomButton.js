import Button from '@mui/material/Button';
import React from 'react';

export default function CustomButton({
  onClick, children, coolColor = 'red', border = 'black solid 2px', margin = '5px'
}) {
  return (
    <Button onClick={onClick}
      sx={{
        background: coolColor,
        border: border,
        margin: margin,
      }}>
      {children}
    </Button>
  );
}

