'use client';

import { useRecoilValue } from 'recoil';
import { isAuto } from 'src/store/atom';
import FlexCenterBox from '../common/FlexCenterBox';
import { Box, Chip, Typography } from '@mui/material';
import PlusDivider from '../header/PlusDivider';
import Divider from '../header/Divider';
import { m, AnimatePresence } from 'framer-motion';
import { todayKeywords } from 'src/data/todayKeywordsData';

export default function TodayKeywords() {
  const isAutoState = useRecoilValue(isAuto);

  // 현재 날짜를 YYYY-MM-DD 형식으로 얻어옵니다.
  const today = new Date().toISOString().split('T')[0];

  // todayKeywords 배열에서 오늘 날짜와 일치하는 항목을 찾습니다.
  const todayKeywordObject = todayKeywords.find((item) => item.date === today);

  // 일치하는 항목이 있으면 해당 keywords를 반환하고, 없으면 undefined를 반환합니다.
  const keywordsForToday = todayKeywordObject ? todayKeywordObject.keywords : undefined;
  console.log(today, todayKeywordObject, keywordsForToday);

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
          <FlexCenterBox>
            {keywordsForToday.map((keyword, index) => (
              <>
                <Chip
                  key={index}
                  label={'#' + keyword}
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
