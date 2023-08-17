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
import { Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FlexAlignBox from '../common/FlexAlignBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
  console.log('debug', post);
  // const [result, setResult] = React.useState({});
  const userId = useRecoilValue(loginIdAtom);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <IconButton sx={{ position: 'absolute', right: '20px', top: '20px' }}>
            <CloseIcon onClick={handleClose} sx={{ fontSize: '30px', color: 'white' }} />
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
            {post.commentList.map((comment: IComment, index) => (
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                key={index}
              >
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
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
