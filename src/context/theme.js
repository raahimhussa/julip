// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Cabinet Grotesk Variable', // Set your font family here
  },
  palette: {
    primary: {
      main: '#1976d2', // Your primary color
    },
    secondary: {
      main: '#dc004e', // Your secondary color
    },
  },
});

export default theme;
