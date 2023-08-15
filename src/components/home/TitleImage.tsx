import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { isAuto } from '../../store/atom';

export default function TitleImage() {
  const isAutoState = useRecoilValue(isAuto);
  return (
    <>
      {isAutoState ? (
        <Box
          component="img"
          sx={{ mb: '20px' }}
          src="./assets/images/home/titleAuto.png"
          width={600}
          alt="메인이미지"
        />
      ) : (
        <Box
          component="img"
          sx={{ mb: '20px' }}
          src="./assets/images/home/title.png"
          width={600}
          alt="메인이미지"
        />
      )}
    </>
  );
}
