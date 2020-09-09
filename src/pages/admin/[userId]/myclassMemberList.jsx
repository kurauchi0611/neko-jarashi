import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import App from "../../../components/Admin/App";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(i);
  }
  return (
    <App>
      <List className={classes.root}>
        {arr.map((arrs) => {
          return (
            <Button>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="田中" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="田中太郎"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Button>
          );
        })}
        <Divider variant="inset" component="li" />
      </List>
    </App>
  );
}
