import AppbarNav from '../components/AppbarNav';
import DrawerNav from '../components/DrawerNav';
import TenantsContainer from '../containers/TenantsContainer';

function DashboardLayout() {
  return (
    <>
      <AppbarNav />
      <DrawerNav />
      <TenantsContainer />
    </>
  );
}

export default DashboardLayout;
