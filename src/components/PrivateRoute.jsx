import { Navigate } from "react-router-dom";

let auth;
auth = true;
auth = null;

const PrivateRoute = ({ private: Private }) => {
  return auth ? <Private /> : <Navigate to="/login" />;
};

export default PrivateRoute;
