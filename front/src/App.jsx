import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from "./core/utils/ProtectedRoute";

import { RegisterPage } from "./modules/auth/pages/RegisterPage";
import { LoginPage } from "./modules/auth/pages/LoginPage";
import { DashboardPage } from "./modules/dashboard/pages/DashboardPage";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <div className="w-screen h-screen">
        <Routes>
          <Route
            element={
              <ProtectedRoute canNavigate={user} redirectPath="/login" />
            }
          >
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/finance" />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
