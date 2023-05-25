import { AppBar, Toolbar, Typography } from "@mui/material";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";

const Topbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#999" }}>
      <Toolbar>
        <EqualizerOutlinedIcon sx={{ color: "#000", padding: "10px" }} />
        <Typography variant="h6" style={{ flexGrow: 1, color: "#000" }}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
