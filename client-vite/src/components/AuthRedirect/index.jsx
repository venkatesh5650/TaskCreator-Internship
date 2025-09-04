import { Navigate } from "react-router-dom";

const AuthRedirect = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    // Already logged in → send them to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  // Not logged in → allow access to login/register
  return children;
};

export default AuthRedirect;
