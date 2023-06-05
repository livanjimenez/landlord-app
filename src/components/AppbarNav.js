import { AppBar, Toolbar, Typography } from '@mui/material';

const drawerWidth = 181;

const AppbarNav = () => (
  <AppBar
    color="transparent"
    position="fixed"
    sx={{
      zIndex: 1201,
      width: '100%',
      boxShadow: 'none',
      borderBottom: '1px solid #999',
    }}
  >
    <Toolbar>
      <Typography variant="h5" noWrap>
        Landlord Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppbarNav;
