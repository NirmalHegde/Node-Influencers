import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

//Theme setup for UI
const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif", //added Montserrat as primary font
  },

  palette: {
    primary: {
      light: "#757575", //light grey
      main: "#404040", //dark grey
    }
  }
});

//renders app to page
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
