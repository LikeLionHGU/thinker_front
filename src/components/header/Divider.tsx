import { Box } from '@mui/material';

export default function Divider() {
  return (
    <Box
      sx={{
        borderRight: '1px solid',
        color: 'success.contrastText',

        height: {
          xs: '15px',
          md: '20px',
        },
        mx: {
          xs: '8px',
          md: '15px',
        },
      }}
    />
  );
}
