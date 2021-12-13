import AppRouter from "./routers/AppRouter";
import { ThemeProvider  } from '@mui/material/styles';
import { theme } from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider >
  );
}

export default App;
