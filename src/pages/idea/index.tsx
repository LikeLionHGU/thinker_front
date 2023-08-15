import { Box, Typography } from '@mui/material';
import { searchResult } from './data';
import Image from 'next/image';

export default function IdeaResultPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'success.darker',
        gap: '50px',
        py: '150px',
      }}
    >
      {searchResult.items.map((item) => (
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
            <a href={`${item.link}`} target="_blank">
              <Box sx={{ minWidth: '250px', height: '150px' }}>
                <Image
                  src={item.pagemap.metatags[0]['og:image']}
                  width={250}
                  height={150}
                  alt="이미지"
                />
              </Box>
            </a>
            <a href={`${item.link}`} target="_blank">
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
                border: 1,
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'end',
                p: '10px',
              }}
            ></Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
