import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Chip, IconButton, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FlexAlignBox from 'src/components/common/FlexAlignBox';
import Divider from 'src/components/header/Divider';
import FlexCenterBox from 'src/components/common/FlexCenterBox';
import PlusDivider from 'src/components/header/PlusDivider';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     router.push('/dashboard/one');
  //   }
  // });
  const todayKeywords = ['#블록체인', '#노인', '#중고거래'];

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
        <Box
          component="img"
          sx={{ mb: '20px' }}
          src="./assets/images/home/title.png"
          width={600}
          alt="메인이미지"
        />
        <>
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
          <FlexCenterBox width="700">
            <Chip
              label="오늘의 띵키워드"
              sx={{ backgroundColor: 'success.contrastText', typography: 'h6', p: 1 }}
            ></Chip>
            <Divider />
            <Typography variant="h6" sx={{ color: 'success.contrastText' }}>
              오늘의 키워드를 조합하여 창의적인 아이디어를 만들어보세요.
            </Typography>
          </FlexCenterBox>
          <FlexCenterBox>
            {todayKeywords.map((keyword, index) => (
              <>
                <Chip
                  key={index}
                  label={keyword}
                  sx={{
                    color: 'secondary.main',
                    typography: 'h6',
                    p: 1,
                    backgroundColor: 'success.dark',
                  }}
                ></Chip>
                {index !== 2 && <PlusDivider />}
              </>
            ))}
          </FlexCenterBox>
        </>
      </Box>
    </Box>
  );
}
