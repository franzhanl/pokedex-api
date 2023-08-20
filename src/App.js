import './App.css';
import { Main } from './components/Main/Main';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeTogglerButton } from './components/ThemeTogglerButton/ThemeTogglerButton';


function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
      <Main />
    </ThemeProvider>
  );
}

export default App;
