import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)