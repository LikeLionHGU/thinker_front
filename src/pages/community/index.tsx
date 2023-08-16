import { Box } from '@mui/material';
import { useState } from 'react';
import CommentTextArea from 'src/components/community/CommentTextArea';
import TodayKeywords from 'src/components/home/TodayKeywords';

export default function communityPage() {
  return (
    <Box
      sx={{
        backgroundColor: 'success.darker',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
        pt: '100px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TodayKeywords />
        <Box sx={{ p: '30px', borderTop: 1, borderColor: '#303030', mt: '30px' }}>
          <CommentTextArea />
        </Box>
      </Box>
      <Box sx={{ width: '300px', height: '350px', border: 1 }}>달력</Box>
    </Box>
  );
}
