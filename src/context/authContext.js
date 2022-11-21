import { createContext, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const values = {};
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  // !! Booleane cevirmek icin kullanılır.
  return { ...context, isAuth: Boolean(Object.keys(context).length) };
};

export { useAuth };

export default AuthProvider;
