import { styled, useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PaymentIcon from "@mui/icons-material/Payment";
import PeopleIcon from "@mui/icons-material/People";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const DrawerNav = ({ isMobile }) => (
  <div>
    {!isMobile && (
      <StyledDrawer variant="permanent">
        <List>
          {[
            { icon: <HomeIcon />, text: "Home" },
            { icon: <BusinessIcon />, text: "Properties" },
            { icon: <PaymentIcon />, text: "Transactions" },
            { icon: <PeopleIcon />, text: "Renters" },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{ justifyContent: "flex-start", width: "100%" }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    )}
  </div>
);

export default DrawerNav;
