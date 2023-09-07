import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header/Header'
import { AppRoutes } from './pages/routes';
import { styled } from 'styled-components';

const StyledContainer = styled.div`
    display: flex;    
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

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
