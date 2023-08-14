import PropTypes from 'prop-types';
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
import Link from 'next/link';
import LinkTextButton from 'src/components/common/LinkTextButton';
// import Link from 'next/link';

// ----------------------------------------------------------------------

Header.propTypes = {
  isOffset: PropTypes.bool,
};

export default function Header({ isOffset }) {
  const theme = useTheme();

  return (
    <AppBar color="transparent" sx={{ boxShadow: 0, px: '20px' }}>
      <Toolbar
        sx={{
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
          <FlexAlignBox>홈</FlexAlignBox>
        </FlexAlignBox>

        <LinkTextButton text="로그인" link="/" />
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
