'use client';

import { Box, Typography } from '@mui/material';
import Sidebar from '../../components/profile/Sidebar';
import Image from 'next/image';
import FlexAlignBox from '../../components/common/FlexAlignBox';
import EmptyAlert from 'src/components/profile/EmptyAlert';
import SearchResultBlock from 'src/components/idea/SearchResultBlock';
import ServiceAchievement from 'src/components/profile/ServiceAchievement';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getUserApi } from 'src/apis/user';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { loginIdAtom } from 'src/store/atom';
import { useRecoilValue } from 'recoil';

export default function Profile() {
  const [profileInfo, setProfileInfo] = useState(null);
  const userId = useRecoilValue(loginIdAtom);
  useEffect(() => {
    getUserApi(userId).then((res) => {
      setProfileInfo(res);
      console.log(res);
    });
  }, []);

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
      <Sidebar
        member={{ name: profileInfo?.name as string, email: profileInfo?.email as string }}
      />
      {/* <EmptyAlert /> */}
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '300px' }}></Box>
        <ServiceAchievement />
      </Box>
    </Box>
  );
}
