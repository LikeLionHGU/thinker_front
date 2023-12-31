import { Box, Button, Typography } from '@mui/material';

import Image from 'next/image';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { addBookmark, deleteBookmark } from 'src/apis/bookmark';
import { isAuto, loginIdAtom } from 'src/store/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Link from 'next/link';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';
import { useRouter } from 'next/router';

type SearchResultBlockProps = {
  item: {
    title: string;
    link: string;
    snippet: string;
    pagemap: {
      metatags: {
        'og:image': string;
      }[];
    };
  };
};

export default function SearchResultBlock({ item }: SearchResultBlockProps) {
  const userId = useRecoilValue(loginIdAtom);

  const setIsAutoState = useSetRecoilState(isAuto);

  const router = useRouter();
  const [isLikeSuccess, setIsLikeSuccess] = useState(router.pathname === '/profile' ? true : false);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '10px',
        p: '5px',
        width: '1100px',
        backgroundColor: 'success.contrastText',
      }}
    >
      <Box sx={{ display: 'flex', width: '100%' }}>
        <a href={`${item.link}`} target="_blank" rel="noreferrer">
          <Box sx={{ minWidth: '250px', height: '150px' }}>
            <Image
              src={item.pagemap.metatags[0]['og:image']}
              width={250}
              height={150}
              alt="이미지"
            />
          </Box>
        </a>
        <a href={`${item.link}`} target="_blank" rel="noreferrer">
          <Box
            sx={{
              pl: '30px',
              height: '100%',
              width: '600px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              py: '5px',
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mb: '2px' }}>
                {item.title}
              </Typography>
              <Typography variant="body1">
                {item.snippet.length > 100 ? item.snippet.slice(0, 100) : item.snippet}
              </Typography>
            </Box>

            <Typography variant="caption">{item.link}</Typography>
          </Box>
        </a>
        <Box
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'end',
            p: '10px',
          }}
        >
          {isLikeSuccess ? (
            <BookmarkIcon
              onClick={() => {
                console.log(item.link);
                // deleteBookmark(userId, item.link).then((res) => {
                //   console.log('res', res.data);
                // });
              }}
            />
          ) : (
            <BookmarkBorderIcon
              onClick={() => {
                console.log(userId);
                addBookmark(
                  userId,
                  item.link,
                  item.title,
                  item.snippet,
                  item.pagemap.metatags[0]['og:image']
                ).then((res) => {
                  console.log(res.data);
                  setIsLikeSuccess(true);
                });
              }}
            />
          )}
          <Link
            href={{
              pathname: '/',
              query: { url: item.link },
            }}
            onClick={() => {
              setIsAutoState(true);
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary.darker',
              }}
            >
              분석하기
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
