import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     router.push('/dashboard/one');
  //   }
  // });

  return <Box sx={{ backgroundColor: 'success.darker', height: '100vh' }}></Box>;
}
