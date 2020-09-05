import React from "react";
import { uuid } from "uuidv4";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { format } from "date-fns";
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

  const datas = [
    {
      title: "タイトル1",
      body: "ボディ1",
      isPost: false,
      uid: "1",
      updatedAt: "",
    },
    {
      title: "タイトル2",
      body: "ボディ2",
      isPost: true,
      uid: "2",
    },
    {
      title: "タイトル2",
      body: "ボディ2",
      isPost: true,
      uid: "3",
    },
  ];

  const router = useRouter();
  const userId = router.query.userId;
  const createdUuid = uuid().replace(/-/g, "").slice(0, -20);
  const handleDelete = () => {};

  const handleClick = () => {};

  return (
    <App>
      <Grid container spacing={3}>
        {datas.map((data) => {
          return (
            <Grid item xs={6}>
              <Card className={classes.root}>
                <Link
                  href="/admin/[userId]/notification/[id]"
                  as={`/admin/${userId}/notification/${data.uid}`}
                >
                  <CardActionArea>
                    <CardContent className={classes.paddingNone}>
                      {data.isPost ? (
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
                        {data.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        更新日:{" "}
                        {format(new Date(), "yo年LLLdo(EEEEE) Ho:mo", {
                          locale: ja,
                        })}
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
