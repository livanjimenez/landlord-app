import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TenantList from "./components/TenantList";
import TenantDetail from "./components/TenantDetail";
import DashboardContainer from "./containers/DashboardContainer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={DashboardContainer} />
          <Route exact path="/tenants" component={TenantList} />
          <Route path="/tenants/:tenantId" component={TenantDetail} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
