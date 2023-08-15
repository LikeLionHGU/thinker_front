import { Box } from '@mui/material';

export default function FlexAlignBox({ children, width }: { children: React.ReactNode }) {
  return <Box sx={{ display: 'flex', alignItems: 'center', width }}>{children}</Box>;
}
