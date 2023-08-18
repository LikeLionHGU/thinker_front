import { Avatar, Box, Typography } from '@mui/material';
import FlexAlignBox from 'src/components/common/FlexAlignBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { addPostLike, deletePostLike } from 'src/apis/post';
import { useRecoilValue } from 'recoil';
import { loginIdAtom } from 'src/store/atom';
export const converter = (localDateTime) => {
  const inputDate = new Date(localDateTime);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffInMilliseconds = currentDate.getTime() - inputDate.getTime();

  // Convert time difference into various units
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Determine the appropriate relative string
  if (diffInDays >= 1) {
    return `${diffInDays}일전`;
  } else if (diffInHours >= 1) {
    return `${diffInHours}시간전`;
  } else if (diffInMinutes >= 1) {
    return `${diffInMinutes}분전`;
  } else {
    return '방금 전';
  }
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

export default function Comment({ post }: any) {
  const userId = useRecoilValue(loginIdAtom);
  return (
    <Box
      key={post?.postId}
      sx={{
        color: 'white',
        height: '200px',
        position: 'relative',
        borderColor: '#303030',
        p: '40px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <FlexAlignBox>
            <Avatar
              sx={{
                mr: '20px',
                width: '50px',
                height: '50px',
                backgroundColor: 'success.contrastText',
              }}
            />
            <Typography variant="h6">{post?.member.name}</Typography>
          </FlexAlignBox>
          <Typography variant="body1" sx={{ ml: '70px' }}>
            {post.content}
          </Typography>
        </Box>

        <Box sx={{ ml: '70px', display: 'flex', gap: '5px', alignItems: 'center' }}>
          {post.isLiked ? (
            <FavoriteIcon
              onClick={() =>
                deletePostLike(post.postId, userId).then((res) => {
                  console.log(res);
                  window.location.reload();
                })
              }
              sx={{ color: 'white' }}
            />
          ) : (
            <FavoriteBorderIcon
              onClick={() => {
                addPostLike(post.postId, userId).then((res) => {
                  console.log(res);

                  window.location.reload();
                });
              }}
              sx={{ color: 'white' }}
            />
          )}
          {post?.postLikeCount}
          <ModeCommentOutlinedIcon sx={{ ml: 2 }} />
          {post?.commentList.length}
        </Box>
      </Box>
      <Box>{converter(post?.date)}</Box>
    </Box>
  );
}
