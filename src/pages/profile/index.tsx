import { Box, Typography } from '@mui/material';
import Sidebar from '../../components/profile/Sidebar';
import Image from 'next/image';
import FlexAlignBox from '../../components/common/FlexAlignBox';
import EmptyAlert from 'src/components/profile/EmptyAlert';
import SearchResultBlock from 'src/components/idea/SearchResultBlock';
import ServiceAchievement from 'src/components/profile/ServiceAchievement';
import axios from 'axios';

export default function profile() {
  // async function fetchData(postId) {
  //   try {
  //     const response = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/post/1`);

  //     // if (!response.ok) {
  //     //   throw new Error(`Failed with status: ${response.status}`);
  //     // }

  //     // const res = response.data;

  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // fetchData(123).then((res) => {
  //   console.log(res.data);
  // });

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
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '300px' }}></Box>
        <ServiceAchievement />
      </Box>
    </Box>
  );
}
