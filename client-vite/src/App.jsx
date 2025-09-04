import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../../client-vite/src/components/Login/login";
import Register from "../../client-vite/src/components/Register/register";
import Dashboard from "../../client-vite/src/components/Dashboard/dashboard";
import ProtectedRoute from "../../client-vite/src/components/ProtectedRoute";
import AuthRedirect from "../../client-vite/src/components/AuthRedirect";

// Import InternsPage component
import InternsPage from "../../client-vite/src/components/InternsPage";

function App() {
  const role = localStorage.getItem("role"); // get role for routing

  return (
    <Router>
      <Routes>
        {/* Login & Register get wrapped with AuthRedirect */}
        <Route
          path="/login"
          element={
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRedirect>
              <Register />
            </AuthRedirect>
          }
        />

        {/* Dashboard protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Interns Page protected */}
        <Route
          path="/interns"
          element={
            <ProtectedRoute>
              {role === "manager" ? <InternsPage /> : <Dashboard />}
            </ProtectedRoute>
          }
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
