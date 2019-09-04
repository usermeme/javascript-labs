import { createMuiTheme } from '@material-ui/core/styles/';
import { yellow } from '@material-ui/core/colors';

export default createMuiTheme({
  typography: {
    fontFamily: '"Lato", "Arial", "sans-serif"'
  },
  palette: {
    primary: {
      light: '#6d6d6d',
      main: '#424242',
      dark: '#1b1b1b',
      contrastText: '#fff'
    },
    secondary: yellow
  }
});
