import { Box, Typography } from '@mui/material';
import Sidebar from '../../components/profile/Sidebar';
import Image from 'next/image';
import FlexAlignBox from '../../components/common/FlexAlignBox';
import EmptyAlert from 'src/components/profile/EmptyAlert';
import SearchResultBlock from 'src/components/idea/SearchResultBlock';
import { member } from './data';

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

export default function profile() {
  const converter = (data): SearchResultBlockProps => {
    const item = {
      title: data.title,
      snippet: '',
      link: data.url,
      pagemap: {
        metatags: [
          {
            'og:image': '/assets/images/profile/profileLock.png',
          },
        ],
      },
      // image: '/assets/images/home/logo_thinkey.png',
    };
    return item;
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'success.darker',
        display: 'flex',

        justifyContent: 'center',
        pt: '132px',
      }}
    >
      <Sidebar />
      {/* <EmptyAlert /> */}
      <Box sx={{ width: '1100px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box
          sx={{
            backgroundColor: '#6665F6',
            borderRadius: '10px',
            height: '60px',
            color: 'success.contrastText',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            pl: '20px',
            mb: '20px',
          }}
        >
          서비스 모아보기
        </Box>
        {member.bookMarkList.map((item, index) => (
          <SearchResultBlock key={index} item={converter(item)} />
        ))}
      </Box>
    </Box>
  );
}
