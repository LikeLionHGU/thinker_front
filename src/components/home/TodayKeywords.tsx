'use client';

import { useRecoilValue } from 'recoil';
import { isAuto } from 'src/store/atom';
import FlexCenterBox from '../common/FlexCenterBox';
import { Box, Chip, Typography } from '@mui/material';
import PlusDivider from '../header/PlusDivider';
import Divider from '../header/Divider';
import { m, AnimatePresence } from 'framer-motion';

export default function TodayKeywords() {
  const isAutoState = useRecoilValue(isAuto);
  const todayKeywords = ['#블록체인', '#노인', '#중고거래'];
  return (
    <AnimatePresence>
      {!isAutoState ? (
        <m.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
        >
          <FlexCenterBox width="700">
            <Chip
              label="오늘의 띵키워드"
              sx={{ backgroundColor: 'success.contrastText', typography: 'h6', p: 1 }}
            />
            <Divider />
            <Typography variant="h6" sx={{ color: 'success.contrastText' }}>
              오늘의 키워드를 조합하여 창의적인 아이디어를 만들어보세요.
            </Typography>
          </FlexCenterBox>
          <Box sx={{ height: '20px' }} />
          <FlexCenterBox width="700">
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
                />
                {index !== 2 && <PlusDivider />}
              </>
            ))}
          </FlexCenterBox>
        </m.div>
      ) : (
        <Box sx={{ height: '85px' }}></Box>
      )}
    </AnimatePresence>
  );
}
