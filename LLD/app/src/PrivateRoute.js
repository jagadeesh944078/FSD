import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  console.log(roles);
  if (roles && !roles.includes("user")) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
