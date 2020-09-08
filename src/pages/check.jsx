import App from '../components/App';
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../materialui/theme';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  Wrap: {
    top: 20,
    width: 375,
    hight: 736,
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.Wrap}>
      <CssBaseline />
      <h1>check</h1>
      </div>
    </MuiThemeProvider>
  );
}
