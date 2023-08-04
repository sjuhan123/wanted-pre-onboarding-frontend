import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ToDo from './pages/ToDo';
import Welcome from './pages/Welcome';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
