import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import lime from '@material-ui/core/colors/lime';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[600],
    },
    secondary: {
      main: lime[200],
    },
  },
});


export default theme;