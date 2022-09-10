import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#EB8C7A',
      light: '#FFF'
    },
    secondary: {
      main: '#6390EB',
      dark: '#282c34'
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  typography: {
    h5: {
      fontSize: '16px',
    }
  },
});
