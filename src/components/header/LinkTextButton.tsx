import { Button, useTheme } from '@mui/material';
import Link from 'next/link';

export default function LinkTextButton({ text, link }) {
  const theme = useTheme();
  return (
    <Link href={link}>
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
