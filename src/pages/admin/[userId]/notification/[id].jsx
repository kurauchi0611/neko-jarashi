import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { db, FieldValue } from "../../../../plugins/firebase";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import App from "../../../../components/Admin/App";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const useStyles = makeStyles((theme) => ({
  wrap: {
    display: "flex",
    justifyContent: "space-between",
    // height: "100%",
  },
  inner: {
    width: "100%",
    "& .mde-textarea-wrapper": {
      border: "1px solid #fff",
      outlineColor: theme.palette.primary.main,
      "&:hover": { borderColor: theme.palette.primary.main },
      "&:focus + :hover": { borderColor: "#fff" },
    },
    "& .mde-text": {
      outlineColor: theme.palette.primary.main,
    },
  },
  padding: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  editor: {
    height: "100%",
    display: "flex",
    flexFlow: "column",
    "& .mde-tabs": {
      display: "none",
    },
    "& .grip": {
      display: "none",
    },
    "& .mde-textarea-wrapper": {
      flex: "1 1 100%",
      "& .mde-text": {
        height: "100% !important",
      },
    },
  },
  preview: {
    border: "1px solid #c8ccd0",
    background: "#fff",
    width: "50%",
    maxHeight: "727px",
    overflowY: "auto",
    wordBreak: "break-all",
  },
  previewChar: {
    background: "#f9f9f9",
    borderBottom: "1px solid #c8ccd0",
    display: "flex",
    flexFlow: "column",
    fontSize: "20px",
    height: "45px",
    justifyContent: "center",
    paddingLeft: "18px",
  },
  siteUrl: {
    marginTop: "10px",
    width: "100%",
  },
  title: {
    width: "100%",
    marginBottom: "30px",
  },
  button: {
    marginTop: "30px",
  },
  buttonMargin: {
    marginLeft: "15px",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [md, setMd] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState("write");
  const [isFireStore, setIsFireStore] = React.useState(false);
  const [uuid, setUuid] = React.useState("");

  const router = useRouter();
  const userId = router.query.userId;
  const uid = router.query.id;

  React.useEffect(() => {
    async function fetchNotification() {
      const notificationDb = await db
        .collection("notifications")
        .where("uid", "==", uid)
        .get();

      if (notificationDb.empty) return;
      setIsFireStore(true);

      notificationDb.forEach((doc) => {
        setUuid(doc.id);
        const notificationData = doc.data();

        setTitle(notificationData.title);
        setMd(notificationData.body);
        setUrl(notificationData.url);
      });
    }

    fetchNotification();
  }, []);

  const sendFirestore = async (isPost) => {
    if (isFireStore) {
      const notification = {
        title,
        body: md,
        url,
        isPost,
        updatedAt: FieldValue.serverTimestamp(),
      };
      await db.collection("notifications").doc(uuid).update(notification);
    } else {
      const notification = {
        title,
        body: md,
        url,
        teacher: "aaaa",
        uid,
        isPost,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      };
      await db.collection("notifications").add(notification);
    }
  };

  const sendNotification = async () => {
    sendFirestore(true);
  };

  const saveNotification = async () => {
    sendFirestore(false);
  };

  return (
    <App>
      <TextField
        className={classes.title}
        label="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={classes.wrap}>
        <div className={classes.inner}>
          <ReactMde
            className={classes.editor}
            value={md}
            onChange={setMd}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>
      </div>

      <TextField
        className={classes.siteUrl}
        label="サイトURL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <div className={classes.button}>
        <Button variant="contained" onClick={saveNotification}>
          保存
        </Button>
        <Button
          onClick={sendNotification}
          className={classes.buttonMargin}
          variant="contained"
        >
          投稿
        </Button>
      </div>
    </App>
  );
}
