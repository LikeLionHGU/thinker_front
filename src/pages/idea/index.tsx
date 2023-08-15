import { Box, Button, Typography } from '@mui/material';
import { searchResult } from './data';
import Image from 'next/image';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SearchResultBlock from '../../components/idea/SearchResultBlock';
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
      {searchResult.items.map((item, index) => (
        <SearchResultBlock key={index} item={item} />
      ))}
    </Box>
  );
}
