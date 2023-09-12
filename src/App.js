import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header/Header'
import { AppRoutes } from './pages/routes';
import { StyledContainer } from './AppStyles';

function App() {
  return (
    <ThemeProvider>
      <StyledContainer>
          <Header/>
          <AppRoutes />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
