import './App.css';
import Router from './Router/Routes';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </AuthProvider>
  );
}

export default App;
