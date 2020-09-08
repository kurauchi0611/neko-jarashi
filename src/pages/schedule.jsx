import App from "../components/App";
import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../materialui/theme";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  Wrap: {
    top: 20,
    width: 375,
    hight: 736,
  },
  root: {
    flexGrow: 1,
  },
  empty: {
    width: 14,
    height: 14,
    marginLeft: 15,
    color: theme.palette.text.secondary,
  },
  day: {
    width: 63,
    height: 14,
    fontSize: 12,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  time: {
    width: 14,
    height: 63,
    fontSize: 12,
    marginLeft: 15,
    textAlign: "center",
    verticalAlign: "center",
    color: theme.palette.text.secondary,
  },
  subject: {
    width: 63,
    height: 63,
    fontSize: 12,
    textAlign: "center",
    verticalAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.Wrap}>
        <CssBaseline />

        {/* ヘッダー */}
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit">
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                時間割
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        
        {/* メインエリア */}
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Paper className={classes.empty}> </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.day}>月</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.day}>火</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.day}>水</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.day}>木</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.day}>金</Paper>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={1}>
              <Paper className={classes.time}>1</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={1}>
              <Paper className={classes.time}>2</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={1}>
              <Paper className={classes.time}>3</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={1}>
              <Paper className={classes.time}>4</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={1}>
              <Paper className={classes.time}>5</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.subject}>a</Paper>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
