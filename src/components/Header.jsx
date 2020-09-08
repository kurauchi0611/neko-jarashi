import * as React from "react";
import Link from "next/link";
// import Link from '@material-ui/'
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import InsertChartOutlinedOutlinedIcon from "@material-ui/icons/InsertChartOutlinedOutlined";
import EventIcon from "@material-ui/icons/Event";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
  },
});

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link href="/user">
        <BottomNavigationAction
          label="ユーザー"
          icon={<AccountCircleOutlined />}
        />
      </Link>
      <BottomNavigationAction
        label="出欠確認"
        icon={<InsertChartOutlinedOutlinedIcon />}
        href="/#"
      />
      <BottomNavigationAction label="時間割" icon={<EventIcon />} href="/#" />
      <BottomNavigationAction
        label="お知らせ"
        icon={<NotificationsOutlinedIcon />}
        href="/notifications"
      />
      <BottomNavigationAction
        label="場所"
        icon={<RoomOutlinedIcon />}
        href="/place"
      />
    </BottomNavigation>
  );
}
