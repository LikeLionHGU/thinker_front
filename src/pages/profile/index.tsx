import { Box, Typography } from '@mui/material';
import Sidebar from '../../components/profile/Sidebar';
import Image from 'next/image';
import FlexAlignBox from '../../components/common/FlexAlignBox';
import EmptyAlert from 'src/components/profile/EmptyAlert';
export default function profile() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'success.darker',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: '100px',
      }}
    >
      <Sidebar />
      <EmptyAlert />
    </Box>
  );
}
