import AddIcon from '@mui/icons-material/Add';

export default function PlusDivider() {
  return (
    <AddIcon
      sx={{
        color: 'success.light',

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
