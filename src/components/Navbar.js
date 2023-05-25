import { AppBar, Toolbar, Typography } from '@mui/material';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#999' }}>
      <Toolbar>
        <EqualizerOutlinedIcon sx={{ color: '#000' }} />
        <Typography variant="h6" style={{ flexGrow: 1, color: '#000' }}>
          Tenant Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
