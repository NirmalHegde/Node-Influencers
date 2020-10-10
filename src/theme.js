import { createMuiTheme } from '@material-ui/core/styles';

//Theme setup for UI
const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif", //added Montserrat as primary font
  },

  palette: {
    primary: {
      light: "#757575", //light grey
      main: "#404040", //dark grey
    },
    secondary: {
      main: "#FFBF14", //yellow
    }
  },

  overrides: {
      MuiTabs: {
        indicator: {
            left: 0,
            width: "3px"
        }
      },
      
      MuiTab: {
        root: {
            textTransform: "none",
            '&$selected': {
                backgroundColor: "#F6F6F6",
                color: '#FFBF14',
            },
            '&:hover': {
              background: '#F6F6F6'
            }
        }
      },
    }
});

export default theme;