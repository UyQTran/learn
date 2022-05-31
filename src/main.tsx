import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#EB8C7A',
    },
    secondary: {
      main: '#6390EB',
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)