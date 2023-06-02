import AppbarNav from "../components/AppbarNav";
import DrawerNav from "../components/DrawerNav";
import PropertiesContainer from "../containers/PropertiesContainer";
import TenantsContainer from "../containers/TenantsContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/system";

function RentersLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppbarNav isMobile={isMobile} />
      <DrawerNav isMobile={isMobile} />
      {/* <TenantsContainer /> */}
      {/* <PropertiesContainer /> */}
    </>
  );
}

export default RentersLayout;
