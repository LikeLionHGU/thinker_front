import { Box } from '@mui/material';
import SearchResultBlock from 'src/components/idea/SearchResultBlock';

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
