import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import SearchResultBlock from 'src/components/idea/SearchResultBlock';
import { searchResultAtom } from 'src/store/atom';

export default function IdeaResultPage() {
  const searchResult = useRecoilValue(searchResultAtom);

  function uniqueByFirstFiveChars(arr) {
    const seen = new Set();
    return arr.filter((item) => {
      const prefix = item.title.substr(0, 5);
      if (seen.has(prefix)) {
        return false;
      }
      seen.add(prefix);
      return true;
    });
  }

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
      {uniqueByFirstFiveChars(searchResult).map((item, index) => (
        <SearchResultBlock key={index} item={item} />
      ))}
    </Box>
  );
}
