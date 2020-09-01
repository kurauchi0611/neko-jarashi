import * as React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import EventIcon from '@material-ui/icons/Event';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const styles = theme => ({
  wrapper:{
    display: 'block',
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    zIndex: 1000,
    textAlign: 'center',
  },
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    maxWidth: '100%', // ボタンが横一杯に広がって欲しくない時はコメントアウト
  },
});


class RouteRelatedBottomNavigation extends React.Component {
  buttons_info = [
    { label: 'ユーザー', icon: <AccountCircleOutlined />, link_to: '/user'},
    { label: '出欠確認', icon: <InsertChartOutlinedOutlinedIcon />, link_to: '/#'},
    { label: '時間割', icon: <EventIcon />, link_to: '/#'},
    { label: 'お知らせ', icon: <NotificationsOutlinedIcon />, link_to: '/notifications'},
    { label: '場所', icon: <RoomOutlinedIcon />, link_to: '/place'},
  ];

  buttons = this.buttons_info.map( (button_info, index) => {
      return (
        <BottomNavigationAction
          value={button_info.link_to}
          label={button_info.label}
          className={this.props.classes.button}
          icon={button_info.icon}
          component={Link}
          to={button_info.link_to}
        />
      );
    })

  render() {
    // Material-ui関連
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <BottomNavigation
          value={this.props.location.pathname}
          showLabels
          className={classes.root}
          children={this.buttons}
        />
      </div>
    );
  }
}