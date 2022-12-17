import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import paths from '../../Router/paths';

const PrivateRoute = ({ children }) => {
  const { isAuth, loading } = useAuth();

  if (!isAuth && !loading) {
    return <Navigate to={paths.login} />;
  }

  return children;
};

export default PrivateRoute;
