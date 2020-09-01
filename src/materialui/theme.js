import {createMuiTheme} from '@material-ui/core/styles'
        
export const theme = createMuiTheme({  // #1
  palette: {
    primary: {
      light: '#ffb851',
      main: '#ffa726',
      dark: '#b2741a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
  },
})