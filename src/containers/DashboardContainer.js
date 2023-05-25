import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TenantList from "../components/Tenant/TenantList";
import tenants from "../mocks/tenantMockData";

const DashboardContainer = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <TenantList tenants={tenants} />
    </>
  );
};

export default DashboardContainer;
