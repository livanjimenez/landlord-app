import { styled } from '@mui/system';
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

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const DrawerNav = () => (
  <div>
    <StyledDrawer variant="permanent">
      <List>
        {[
          { icon: <HomeIcon />, text: 'Home', link: '/' },
          { icon: <BusinessIcon />, text: 'Properties', link: '/properties' },
          // {
          //   icon: <PaymentIcon />,
          //   text: 'Payments',
          //   link: '/transactions',
          // },
          // { icon: <PeopleIcon />, text: 'Tenants', link: '/renters' },
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
    </StyledDrawer>
  </div>
);

export default DrawerNav;
