import { Button, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { loginIdAtom } from 'src/store/atom';

export default function LinkTextButton({ text, link }) {
  const userId = useRecoilValue(loginIdAtom);
  const theme = useTheme();

  return (
    <Link
      href={{
        pathname: `${link}`,
        query: link === '/community' && { ea: userId },
      }}
    >
      <Button
        variant="text"
        sx={{
          fontSize: {
            xs: '12px',
            md: '1rem',
          },
          color: theme.palette.success.contrastText,
        }}
      >
        {text}
      </Button>
    </Link>
  );
}
