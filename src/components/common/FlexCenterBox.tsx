import { Box } from '@mui/material';
import React from 'react';

type FlexCenterBoxProps = {
  width?: string;
  children: React.ReactNode;
};

export default function FlexCenterBox({ width, children }: FlexCenterBoxProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width }}>
      {children}
    </Box>
  );
}
