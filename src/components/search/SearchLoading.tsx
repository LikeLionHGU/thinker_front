import { Box, Typography } from '@mui/material';
import { m } from 'framer-motion';
import Image from 'next/image';

export default function SearchLoading() {
  return (
    <Box
      sx={{
        backgroundColor: 'success.darker',
        minHeight: '100vh',
        pt: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        alignItems: 'center',
      }}
    >
      <div>
        <Typography variant="h5" sx={{ color: 'success.contrastText' }}>
          LOADING
        </Typography>
        <div style={{ height: '5px' }}></div>
        <div style={{ display: 'flex', gap: '7px', justifyContent: 'center' }}>
          {[0, 1, 2].map((i) => (
            <m.div
              key={i}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 0.5,
                delay: i * 0.2,
              }}
              style={{
                border: 1,
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'white',
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '30px' }}>
        {[
          '/assets/images/home/loading1.png',
          '/assets/images/home/loading2.png',
          '/assets/images/home/loading3.png',
        ].map((src, i) => (
          <m.div
            key={i}
            transition={{
              repeat: Infinity,
              repeatType: 'mirror',
              duration: 0.5,
              repeatDelay: 2,
              delay: i * 0.5,
            }}
            animate={{
              y: [0, -50, 0],
            }}
          >
            <Image src={src} width={110} height={150} alt="gd" />
          </m.div>
        ))}
      </div>

      <Box
        sx={{
          textAlign: 'center',
          borderRadius: '30px',
          width: '400px',
          py: '10px',
          backgroundColor: 'success.dark',
          color: '#4FFF32',
        }}
      >
        잠시만 기다려주세요 :) <br />더 많은 영감을 모으고 있는 중입니다.
      </Box>
    </Box>
  );
}
