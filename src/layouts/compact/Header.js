import PropTypes from 'prop-types';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// @mui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
// config
import { HEADER } from '../../config-global';
// utils
import { bgBlur } from '../../utils/cssStyles';
// components
import Logo from '../../components/logo';
import FlexAlignBox from 'src/components/common/FlexAlignBox';
import LinkTextButton from 'src/components/header/LinkTextButton';
import Divider from 'src/components/header/Divider';
import { m } from 'framer-motion';
import { useScroll } from 'react-use';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoginAtom } from 'src/store/atom.ts';
import GoogleButton from '../../auth/GoogleButton';
import { Google } from '@mui/icons-material';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

Header.propTypes = {
  isOffset: PropTypes.bool,
};

export default function Header({ isOffset }) {
  const theme = useTheme();
  const router = useRouter();

  const [isLoginState, setIsLoginState] = useState(null);
  const [recoilLoginValue, setRecoilLoginValue] = useRecoilState(isLoginAtom);

  useEffect(() => {
    setIsLoginState(recoilLoginValue);
  }, [recoilLoginValue]);

  return (
    <AppBar
      color="transparent"
      sx={{
        position: 'fixed',
        boxShadow: 0,
        px: {
          xs: '10px',
          md: '20px',
        },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          itemsAlign: 'center',
          justifyContent: 'space-between',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <FlexAlignBox>
          <Logo />
          <FlexAlignBox>
            <LinkTextButton text="홈" link="/" />
            <Divider />
            <LinkTextButton text="커뮤니티" link="/community" />
          </FlexAlignBox>
        </FlexAlignBox>

        <FlexAlignBox>
          {isLoginState ? (
            <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <Button
              // sx={{ color: 'white', fontSize: '15px', mb: 1 }}
              // variant="text"
              // onClick={() => {
              //   setRecoilLoginValue(false);
              //   router.push('/');
              // }}
              >
                로그 아웃
              </Button>
              <Link href="/profile">
                <AccountCircleIcon sx={{ color: 'white', fontSize: '2rem' }} />
              </Link>
            </Box>
          ) : (
            <GoogleButton />
          )}
        </FlexAlignBox>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
