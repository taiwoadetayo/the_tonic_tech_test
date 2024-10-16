import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";

// view- pages

// config routes
function APPRoutes() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default APPRoutes;
