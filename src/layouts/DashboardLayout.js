import AppbarNav from "../components/AppbarNav";
import DrawerNav from "../components/DrawerNav";
import TenantsContainer from "../containers/TenantsContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/system";

function DashboardLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppbarNav isMobile={isMobile} />
      <DrawerNav isMobile={isMobile} />
      <TenantsContainer />
    </>
  );
}

export default DashboardLayout;
