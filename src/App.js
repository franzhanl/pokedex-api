import './App.css';
import { Main } from './components/Main/Main';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeTogglerButton } from './components/ThemeTogglerButton/ThemeTogglerButton';
import { AppRoutes } from './pages/routes';


function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
