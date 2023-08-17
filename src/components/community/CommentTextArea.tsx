import { useRecoilValue } from 'recoil';
import { loginIdAtom, scriptAtom } from 'src/store/atom';
import { Box, Button, TextField } from '@mui/material';
import { m } from 'framer-motion';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { writeCommunity } from 'src/apis/post';

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
  const userId = useRecoilValue(loginIdAtom);

  const handleUpload = () => {
    {
      const post = {
        title: 'title',
        content: script,
      };

      /**
       * userId가 안먹는다면 그 이유는 유저가 존재하지 않아서이다.
       * 유저가 존재하지 않는 이유는 userId를 autoIncrement로 했기 때문
       */
      writeCommunity(post, userId)
        .then((res) => {
          console.log(res);
          alert('댓글이 생성 되었습니다.');
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const classes = useStyles();

  const [script, setScript] = useState('');

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
        onClick={handleUpload}
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
