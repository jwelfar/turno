import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </Router>
    </div>
  );
};
