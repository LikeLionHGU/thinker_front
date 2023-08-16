import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import SearchResultBlock from 'src/components/idea/SearchResultBlock';
import { searchResultAtom } from 'src/store/atom';

export default function IdeaResultPage() {
  const searchResult = useRecoilValue(searchResultAtom);
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
      {searchResult.map((item, index) => (
        <SearchResultBlock key={index} item={item} />
      ))}
    </Box>
  );
}
