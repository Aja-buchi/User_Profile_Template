import { React } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getToken } from "../utils/localStorage";


function ProtectedRoute({ children }) {
  const token = getToken();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};

export default ProtectedRoute;
