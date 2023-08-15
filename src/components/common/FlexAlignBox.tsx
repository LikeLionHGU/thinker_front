import { Box } from '@mui/material';

type FlexAlignBoxProps = {
  children: React.ReactNode;
  width?: string;
};

export default function FlexAlignBox({ children, width }: FlexAlignBoxProps) {
  return (<Box sx={{ display: 'flex', alignItems: 'center', width }}>{children}</Box>);
}
