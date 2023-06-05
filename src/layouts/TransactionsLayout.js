import AppbarNav from '../components/AppbarNav';
import DrawerNav from '../components/DrawerNav';
import PropertiesContainer from '../containers/PropertiesContainer';
import TenantsContainer from '../containers/TenantsContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';

function TransactionsLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppbarNav />
      <DrawerNav />
      {/* <TenantsContainer /> */}
      {/* <PropertiesContainer /> */}
    </>
  );
}

export default TransactionsLayout;
