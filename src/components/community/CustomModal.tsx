import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRecoilValue } from 'recoil';
import { loginIdAtom } from 'src/store/atom';
import CommentTextArea from './CommentTextArea';
import Comment from './comment';
import CancelIcon from '@mui/icons-material/Cancel';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FlexAlignBox from '../common/FlexAlignBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from '@mui/styles';
import { addComment, addLikeComment, deleteLikeComment } from 'src/apis/comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,

  border: '2px solid #000',

  p: 2,
  color: 'white',
  backgroundColor: 'success.dark',
};

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
interface Props {
  postId: number;
  title: string;
  content: string;
  date: string;
  member: {
    memberId: number;
    name: string;
    email: string;
    nickname: string;
  };
  postLikeCount: number;
  commentList: IComment[];
  isLiked: boolean;
}

interface IComment {
  commentId: number;
  commentLikeCount: number;
  content: string;
  isLiked: null;
  memberName: string;
  nickname: string;
  memberId: number;
}

export default function BasicModal({ post }: any) {
  const classes = useStyles();
  console.log('debug', post);
  // const [result, setResult] = React.useState({});
  const userId = useRecoilValue(loginIdAtom);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = React.useState('');
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{ position: 'absolute', right: '10px', bottom: '20px' }}
      >
        상세 보기
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton sx={{ position: 'absolute', right: '10px', top: '10px' }}>
            <CloseIcon onClick={handleClose} sx={{ fontSize: '25px', color: 'white' }} />
          </IconButton>
          <Comment post={post as any} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              p: '30px',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',

                width: '100%',
                height: '200px',
                overflowY: 'scroll',
              }}
            >
              {post.commentList.map((comment: IComment, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <FlexAlignBox>
                    <Avatar sx={{ width: '50px', height: '50px', mr: '10px' }} />
                    <FlexAlignBox sx={{ ml: '20px' }}>
                      <Typography variant="h6" sx={{ mr: '20px' }}>
                        {comment.memberName}
                      </Typography>
                      <Typography variant="body1">{comment.content}</Typography>
                    </FlexAlignBox>
                  </FlexAlignBox>
                  <Box>
                    {comment.commentLikeCount}
                    <IconButton>
                      {comment.isLiked ? (
                        <FavoriteIcon
                          onClick={() =>
                            deleteLikeComment(post.postId, userId).then((res) => {
                              console.log(res);
                              window.location.reload();
                            })
                          }
                          sx={{ color: 'white', mb: '10px' }}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          onClick={() => {
                            addLikeComment(post.postId, userId).then((res) => {
                              console.log(res);

                              window.location.reload();
                            });
                          }}
                          sx={{ color: 'white' }}
                        />
                      )}
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ position: 'relative', width: '100%' }}>
              <TextField
                id="filled-multiline-static"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                multiline
                rows={3}
                placeholder="당신의 아이디어를 작성해보세요"
                variant="outlined"
                sx={{
                  width: '100%',
                }}
                className={classes.customTextField}
              />
              <Button
                sx={{
                  position: 'absolute',
                  right: '10px',
                  bottom: '10px',
                  color: 'success.contrastText',
                }}
                variant="outlined"
                onClick={() => {
                  const data = { content };
                  addComment(userId, post.postId, data).then((res) => {
                    console.log(res.data);
                    window.location.reload();
                  });
                }}
              >
                게시
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
