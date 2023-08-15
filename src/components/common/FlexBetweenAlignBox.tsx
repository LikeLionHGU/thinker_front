import { Box } from '@mui/material';

type FlexBetweenAlignBoxProps = {
  children: React.ReactNode;
  width?: string;
};

export default function FlexBetweenAlignBox({ children, width }: FlexBetweenAlignBoxProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width }}>
      {children}
    </Box>
  );
}
