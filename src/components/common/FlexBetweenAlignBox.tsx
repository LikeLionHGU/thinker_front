import { Box } from '@mui/material';

export default function FlexBetweenAlignBox({ children, width }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width }}>
      {children}
    </Box>
  );
}
