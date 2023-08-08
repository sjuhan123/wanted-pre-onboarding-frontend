import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { URL } from './constants';
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
          <Route path={URL.SIGN_UP} element={<SignUp />} />
          <Route path={URL.SIGN_IN} element={<SignIn />} />
          <Route path={URL.TODO} element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
