import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ canNavigate, redirectPath = "/login" }) => {
  if (!canNavigate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
ProtectedRoute.propTypes = {
  canNavigate: PropTypes.object,
  redirectPath: PropTypes.string.isRequired,
};
