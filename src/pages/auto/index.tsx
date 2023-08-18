import { autoResultAtom } from 'src/store/atom';

import { useRecoilValue } from 'recoil';
import { Box, Typography } from '@mui/material';

export default function Page() {
  const autoResult = useRecoilValue(autoResultAtom);
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: 'success.darker',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: '200px',
      }}
    >
      <Box
        sx={{
          width: '1100px',
          height: '500px',
          color: 'white',
          backgroundColor: 'success.dark',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: '50px',
          gap: '20px',
        }}
      >
        <Typography variant="h3">검색 결과</Typography>

        <Typography variant="h6">{autoResult}</Typography>
      </Box>
    </Box>
  );
}
