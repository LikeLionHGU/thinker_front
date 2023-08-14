import { Button } from '@mui/material';
import Link from 'next/link';

export default function LinkTextButton({ text, link }) {
  return (
    <Link href={link}>
      <Button variant="text" sx={{ fontSize: '1rem' }}>
        {text}
      </Button>
    </Link>
  );
}
