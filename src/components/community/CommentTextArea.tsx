import { useRecoilState } from 'recoil';
import { scriptAtom } from 'src/store/atom';
import { Box, Button, TextField } from '@mui/material';
import { m } from 'framer-motion';
export default function CommentTextArea() {
  const [script, setScript] = useRecoilState(scriptAtom);
  return (
    <Box sx={{ position: 'relative' }}>
      <m.button
        whileHover={{
          opacity: 0.6,
        }}
        style={{
          zIndex: '20',
          position: 'absolute',
          right: '10px',
          bottom: '10px',
          border: 0,
          backgroundColor: '#6665F7',
          borderRadius: '20px',
          height: '40px',
          width: '100px',
          color: 'white',
          fontSize: '17px',
        }}
      >
        업로드
      </m.button>
      <TextField
        id="filled-multiline-static"
        value={script}
        onChange={(e) => setScript(e.target.value)}
        multiline
        rows={6}
        placeholder="당신의 아이디어를 작성해보세요"
        variant="outlined"
        InputLabelProps={{
          style: {
            color: 'white',
          },
        }}
        InputProps={{
          style: { color: 'white' },
          // Using classes to apply styles on focus
          classes: {
            notchedOutline: 'customNotchedOutline',
          },
        }}
        sx={{
          width: '100%',
          '&:hover .customNotchedOutline': {
            borderColor: 'darkGray',
          },
          // Styling for focused state
          '& .Mui-focused .customNotchedOutline': {
            borderWidth: '1px',
            borderColor: 'white', // Increase the border width when the TextField is focused
          },
        }}
      />
    </Box>
  );
}
