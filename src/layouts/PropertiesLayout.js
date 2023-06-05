import AppbarNav from '../components/AppbarNav';
import DrawerNav from '../components/DrawerNav';
import PropertiesContainer from '../containers/PropertiesContainer';
import TenantsContainer from '../containers/TenantsContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';

function PropertiesLayout() {
  return (
    <>
      <AppbarNav />
      <DrawerNav />
      {/* <TenantsContainer /> */}
      <PropertiesContainer />
    </>
  );
}

export default PropertiesLayout;
