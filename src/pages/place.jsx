import App from '../components/App';
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../materialui/theme';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

const messages = [
  {
    id: 1,
    primary: '先生太郎',
    secondary: "10:01  21階",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: '先生次郎',
    secondary: `09:24  25階`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: '先生三郎',
    secondary: '9:23  教務室',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: '先生四郎',
    secondary: '9:15  4階',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: '喫煙太郎',
    secondary: `21:35  喫煙所`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 6,
    primary: '食堂太郎',
    secondary: `20:03  食堂`,
    person: '/static/images/avatar/1.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
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
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
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
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  先生の現在地
                </Typography>
                <p>最終更新 10:25</p>
              </Toolbar>
            </AppBar>
          </div>
          {/* メインエリア */}
          <Paper square className={classes.paper}>
            <List className={classes.list}>
              {messages.map(({ id, primary, secondary, person }) => (
                <React.Fragment key={id}>
                  {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                  {id === 5 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </React.Fragment>
      </App>
    </MuiThemeProvider>
  );
}
