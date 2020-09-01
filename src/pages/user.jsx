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
      <App>
        <React.Fragment>
          <CssBaseline />
          {/* ヘッダー */}
          <div className={classes.root}>
            <AppBar position="static" >
              <Toolbar>
                <header>
                  <Avatar alt="Profile Picture" />
                  <h1>名前</h1>
                  <p>学籍番号</p>
                </header>
              </Toolbar>
            </AppBar>
          </div>
        </React.Fragment>
      </App>
    </MuiThemeProvider>
  );
}
