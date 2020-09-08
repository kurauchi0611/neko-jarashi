import { CssBaseline } from "@material-ui/core";
// import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles';
import { theme } from "../materialui/theme";
import React from "react";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  Wrap: {
    width: "375px",
    hight: "812px",
  },
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.Wrap}>
        <Component {...pageProps} />
        <Header />
      </div>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
