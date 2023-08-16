import { useRecoilState } from 'recoil';
import { profileSelectedIndex } from '../../store/atom';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { member } from 'src/data/memberData';

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useRecoilState(profileSelectedIndex);
  return (
    <Box
      sx={{
        scale: '0.8',
        position: 'fixed',
        left: '20px',
        top: '100px',
        borderRadius: '10px',
        width: '300px',
        height: '350px',
        backgroundColor: '#D9D9D9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '10px',
      }}
    >
      <AccountCircleIcon sx={{ width: '100px', height: '100px', borderRadius: '50px' }} />
      <Typography variant="h5" sx={{ mb: '10px' }}>
        {member.name}
      </Typography>
      <Typography variant="h6" sx={{ mb: '10px', color: 'success.main' }}>
        {member.email}
      </Typography>
      {/* <Box sx={{ borderTop: 2, borderBottom: 2, width: '100%', py: '10px' }}></Box> */}
      <List component="nav" sx={{ width: '100%' }} aria-label="main mailbox folders">
        <ListItemButton
          sx={{ height: '70px', borderTop: 2, borderBottom: 2 }}
          selected={selectedIndex === 0}
          onClick={(event) => setSelectedIndex(0)}
        >
          <ListItemIcon>
            <FormatListBulletedIcon sx={{ fontSize: '30px' }} />
          </ListItemIcon>

          <ListItemText
            primary="내가 쓴 아이디어"
            sx={{ scale: '1.4', textAlign: 'center', mr: 4 }}
          />
        </ListItemButton>
        <ListItemButton
          sx={{ height: '70px' }}
          selected={selectedIndex === 1}
          onClick={(event) => setSelectedIndex(1)}
        >
          <ListItemIcon>
            <BookmarkBorderIcon sx={{ fontSize: '30px' }} />
          </ListItemIcon>
          <ListItemText
            primary="서비스 모아보기"
            sx={{ scale: '1.4', textAlign: 'center', mr: 4 }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
}
