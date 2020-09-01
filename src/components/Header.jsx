import * as React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import EventIcon from '@material-ui/icons/Event';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    top: 'auto',
    bottom: 0,
    width: '100%',
    position: 'fixed',
  },
}));

export default function BottomAppBar() {
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* アプリバー */}
      <AppBar position="fixed" color="default" className={classes.bottomBar}>
      <Toolbar>
        <Link href="/user">
          <IconButton>
            <AccountCircleOutlined />
          </IconButton>
        </Link>
        <Link href="/#">
          <IconButton>
            <InsertChartOutlinedOutlinedIcon />
          </IconButton>
        </Link>
        <Link href="/#">
          <IconButton>
            <EventIcon />
          </IconButton>
        </Link>
        <Link href="/notifications">
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
        </Link>
        <Link href="/place">
          <IconButton>
            <RoomOutlinedIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
    </React.Fragment>
  );
}


