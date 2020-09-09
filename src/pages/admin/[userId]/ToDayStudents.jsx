import React from "react";
import { db } from "../../../plugins/firebase";
import App from "../../../components/Admin/App";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  check: {
    backgroundColor: "#209cee",
  },
  clear: {
    backgroundColor: "#ff3860",
  },
}));

export default function FolderList() {
  const classes = useStyles();
  const [users, setUsers] = React.useState([]);
  const [start, setStart] = React.useState("");

  React.useEffect(() => {
    async function fetchUsers() {
      await db
        .collection("subject")
        .where("name", "==", "IW31")
        .onSnapshot(
          (querySnapshot) => {
            querySnapshot.forEach((subject) => {
              // const usersList = [...users, subject.data().member];
              // console.log(subject.data());
              setStart(subject.data().start);
              setUsers(subject.data().member);
            });
            console.log(users);
            // ...
          },
          (err) => {
            console.log(`Encountered error: ${err}`);
          }
        );
    }

    fetchUsers();
  }, []);

  return (
    <App>
      <h2>09/09 4限</h2>
      <List className={classes.root}>
        {users.length !== 0 &&
          users.map((user) => {
            return (
              <ListItem key={user.name}>
                <ListItemAvatar>
                  {user.join ? (
                    <Avatar className={classes.check}>
                      <CheckIcon />
                    </Avatar>
                  ) : (
                    <Avatar className={classes.clear}>
                      <ClearIcon />
                    </Avatar>
                  )}
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.join} />
              </ListItem>
            );
          })}
      </List>
    </App>
  );
}
