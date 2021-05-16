import { createMuiTheme } from "@material-ui/core";

export const generalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#333'
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    tonalOffset: 0.2,
  },

});



