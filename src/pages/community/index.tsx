import { Avatar, Box, Typography } from '@mui/material';
import { useState } from 'react';
import FlexAlignBox from 'src/components/common/FlexAlignBox';
import CommentTextArea from 'src/components/community/CommentTextArea';
import TodayKeywords from 'src/components/home/TodayKeywords';
import { allPost } from 'src/data/CommunityData';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

export default function communityPage() {
  const converter = (localDateTime) => {
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

  return (
    <Box
      sx={{
        backgroundColor: 'success.darker',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
        pt: '150px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '800px' }}>
        <TodayKeywords />

        <Box sx={{ p: '30px', borderColor: '#303030', mt: '30px' }}>
          <CommentTextArea />

          {allPost.map((post) => (
            <Box
              key={post.postId}
              sx={{
                color: 'white',
                height: '300px',
                borderTop: 1,

                mt: '30px',

                borderColor: '#303030',
                p: '30px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
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
                    <Typography variant="h6">{post.member.name}</Typography>
                  </FlexAlignBox>
                  <Typography variant="body1" sx={{ ml: '70px' }}>
                    {post.content}
                  </Typography>
                </Box>

                <Box sx={{ ml: '70px', display: 'flex', gap: '5px', alignItems: 'center' }}>
                  {post.isLiked ? (
                    <FavoriteIcon sx={{ color: 'white' }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ color: 'white' }} />
                  )}
                  {post.postLikeCount}
                  <ModeCommentOutlinedIcon sx={{ ml: 2 }} />
                  {133}
                </Box>
              </Box>
              <Box>{converter(post.date)}</Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ width: '300px', height: '350px', border: 1 }}>달력</Box>
    </Box>
  );
}
