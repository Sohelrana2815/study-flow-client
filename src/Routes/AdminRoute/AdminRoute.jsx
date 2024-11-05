import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import PropTypes from "prop-types";
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
