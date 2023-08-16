import { useRouter } from 'next/router';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TodayKeywords from 'src/components/home/TodayKeywords';
import ToggleButton from 'src/components/home/ToggleButton';
import TitleImage from 'src/components/home/TitleImage';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     router.push('/dashboard/one');
  //   }
  // });

  return (
    <Box
      sx={{
        backgroundColor: 'success.darker',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', px: '50px' }}>
        <TitleImage />

        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <ToggleButton />
        </Box>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 700,
            backgroundColor: 'success.dark',
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <SearchIcon sx={{ color: 'success.contrastText' }} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: 'success.contrastText' }}
            placeholder="떠오르는 아이디어를 검색해보세요."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Paper>

        <TodayKeywords />
      </Box>
    </Box>
  );
}
