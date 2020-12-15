import {createMuiTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {lightBlue} from "@material-ui/core/colors";

const theme = createMuiTheme({
   palette: {
      primary: {
         main: lightBlue[500],
      },
      secondary: {
         main: green[500],
      },
   },
});

export default theme
