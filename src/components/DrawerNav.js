import { AppBar, Toolbar, Typography } from '@mui/material';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

const DrawerNav = () => (
  <div>
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Landlord Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      sx={{ width: '240px', flexShrink: 0, marginTop: '64px' }}
    >
      <Toolbar /> {/* Add an empty toolbar for proper spacing */}
      <List>
        {[
          { icon: <HomeIcon />, text: 'Home', link: '/app' },
          { icon: <BusinessIcon />, text: 'Properties', link: '/properties' },
          // {
          //   icon: <PaymentIcon />,
          //   text: 'Payments',
          //   link: '/transactions',
          // },
          { icon: <PeopleIcon />, text: 'Tenants', link: '/renters' },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ justifyContent: 'flex-start', width: '100%' }}
              component={Link}
              to={item.link}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  </div>
);

export default DrawerNav;
