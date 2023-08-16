import { useRecoilState } from 'recoil';
import { scriptAtom } from 'src/store/atom';
import { Box, Button, TextField } from '@mui/material';
import { m } from 'framer-motion';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  customTextField: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      color: 'white',
      //   '& fieldset': {
      //     borderColor: 'darkGray', // default
      //   },
      '&:hover fieldset': {
        borderColor: 'darkGray', // on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // on focus
      },
    },
  },
});
export default function CommentTextArea() {
  const classes = useStyles();

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
        className={classes.customTextField}
      />
    </Box>
  );
}
