import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// view- pages

// config routes
function APPRoutes() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<main className="bg-gray-500">Hello</main>} />
      </Routes>
    </Router>
  );
}

export default APPRoutes;
