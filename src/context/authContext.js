import jwtDecode from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const AuthContext = createContext();

const KLUBUMCO_TOKEN = 'KulubumCo';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const cookieToken = new Cookies().get(KLUBUMCO_TOKEN);
  const [token, setToken] = useState(cookieToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const res = jwtDecode(token);
      setUser(res);
    } catch (error) {
      setUser({});
    }
    setLoading(false);
  }, [token]);

  const isAuth = !!Object.keys(user).length;

  const invalidateCookie = () => {
    const newToken = new Cookies().get(KLUBUMCO_TOKEN);
    setToken(newToken);
  };

  const values = { user, setUser, invalidateCookie, isAuth, loading };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  // !! Booleane cevirmek icin kullanılır.
  return context;
};

export { useAuth };

export default AuthProvider;
