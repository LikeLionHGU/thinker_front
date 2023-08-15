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
        color="secondary"
        value={isAtomState}
        onChange={handleToggleChange}
        exclusive
        aria-label="Platform"
      >
        <ToggleButton sx={{ height: '30px' }} value={false}>
          IDEA
        </ToggleButton>
        <ToggleButton sx={{ height: '30px' }} value={true}>
          URL
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
