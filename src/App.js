import './App.css';
import routes from './Router/Routes';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './context/authContext';
import DataProvider from './context/dataContext';
import { useRoutes } from 'react-router-dom';

function App() {
  const Router = useRoutes(routes);
  return (
    <DataProvider>
      <AuthProvider>
        <SnackbarProvider>{Router}</SnackbarProvider>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
