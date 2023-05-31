import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DashboardContainer from "./containers/DashboardContainer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={DashboardContainer} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

//https://www.payrent.com/
