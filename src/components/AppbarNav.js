import { AppBar, Toolbar, Typography } from "@mui/material";

const drawerWidth = 181;

const AppbarNav = ({ isMobile }) => (
  <AppBar
    position="fixed"
    sx={{
      zIndex: 1201,
      width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
      backgroundColor: "#000",
    }}
  >
    <Toolbar>
      <Typography variant="h6" noWrap>
        Landlord Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppbarNav;
