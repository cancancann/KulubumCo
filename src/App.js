import './App.css';
import Router from './Router/Routes';
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
function App() {
  return (
    <div>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </div>
  );
}

export default App;
