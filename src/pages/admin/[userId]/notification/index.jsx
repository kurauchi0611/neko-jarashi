import React from "react";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { db } from "../../../../plugins/firebase";
import ja from "date-fns/locale/ja";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import App from "../../../../components/Admin/App";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  paddingNone: {
    paddingBottom: theme.spacing(0),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  const router = useRouter();
  const userId = router.query.userId;
  const createdUuid = uuidv4().replace(/-/g, "").slice(0, -20);
  const handleDelete = () => {};

  const handleClick = () => {};

  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    const notificationsData = [];
    async function fetchNotifications() {
      const notificationsDb = await db.collection("notifications").get();

      notificationsDb.forEach((doc) => {
        const data = doc.data();

        const list = {
          title: data.title,
          isPost: data.isPost,
          uid: data.uid,
          updatedAt: format(data.updatedAt.toDate(), "yo年LLLdo(EEEEE) Ho:mo", {
            locale: ja,
          }),
        };

        notificationsData.push(list);

      });

      setNotifications(notificationsData);
    }

    fetchNotifications();
  }, []);

  return (
    <App>
      <Grid container spacing={3}>
        {notifications.length !== 0 &&
          notifications.map((notification) => {
            return (
              <Grid item xs={6} key={notification.uid}>
                <Card className={classes.root}>
                  <Link
                    href="/admin/[userId]/notification/[id]"
                    as={`/admin/${userId}/notification/${notification.uid}`}
                  >
                    <CardActionArea>
                      <CardContent className={classes.paddingNone}>
                        {notification.isPost ? (
                          <Chip
                            color="primary"
                            label="送信済"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            deleteIcon={<DoneIcon />}
                          />
                        ) : (
                          <Chip
                            color="secondary"
                            label="未送信"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            deleteIcon={<ErrorOutlineIcon />}
                          />
                        )}
                      </CardContent>

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {notification.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          更新日: {notification.updatedAt}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            );
          })}
      </Grid>

      <Link
        href="/admin/[userId]/notification/[id]"
        as={`/admin/${userId}/notification/${createdUuid}`}
      >
        <Fab className={classes.fab} color="primary" arprimarya-label="edit">
          <EditIcon />
        </Fab>
      </Link>
    </App>
  );
}
