import App from "../components/App";
import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../materialui/theme";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";

const messages = [
  {
    id: 1,
    primary: "8/17",
    secondary: "夏季休業中の補講のお知らせ",
  },
  {
    id: 2,
    primary: "8/4",
    secondary: `台風による休校のお知らせ`,
  },
  {
    id: 3,
    primary: "7/28",
    secondary: "台風による休校のお知らせ",
  },
  {
    id: 4,
    primary: "7/13",
    secondary: "台風による休校のお知らせ",
  },
  {
    id: 5,
    primary: "7/12",
    secondary: `台風による休校のお知らせ`,
  },
  {
    id: 6,
    primary: "6/21",
    secondary: `一部休講のお知らせ`,
  },
];

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
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.Wrap}>
        <CssBaseline />
        {/* ヘッダー */}
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit">
                <NotificationsOutlinedIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                お知らせ
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        {/* メインエリア */}
        <Paper square className={classes.paper}>
          <List className={classes.list}>
            {messages.map(({ primary, secondary }) => (
              <React.Fragment>
                <ListItem button>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </div>
    </React.Fragment>
  );
}
