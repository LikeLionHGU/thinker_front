import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useRecoilState } from 'recoil';
import { isAuto } from 'src/store/atom';

export default function CustomToggleButton() {
  const [isAtomState, setIsAtomState] = useRecoilState(isAuto);

  const handleToggleChange = (event, newValue) => {
    // You can also add more checks if newValue is null or not
    if (newValue !== null) {
      setIsAtomState(newValue);
    }
  };

  return (
    <Box>
      <ToggleButtonGroup
        color={`${isAtomState ? 'warning' : 'primary'}`}
        value={isAtomState}
        onChange={handleToggleChange}
        exclusive
        sx={{ backgroundColor: 'black' }}
        aria-label="Platform"
      >
        <ToggleButton sx={{ height: '30px' }} value={false}>
          일반 모드
        </ToggleButton>
        <ToggleButton sx={{ height: '30px' }} value={true}>
          분석 모드
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
