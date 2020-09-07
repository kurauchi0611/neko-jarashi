import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { db, FieldValue } from "../../../../plugins/firebase";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import App from "../../../../components/Admin/App";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ReactMarkdown from "react-markdown/with-html";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "600px",
    margin: "0 auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "scroll",
    height: "500px",
  },
  wrapper: {
    position: "relative",
    marginLeft: theme.spacing(2),
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  btnWrap: {
    display: "flex",
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
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const userId = router.query.userId;
  const uid = router.query.id;

  React.useEffect(() => {
    async function fetchNotification() {
      const notificationDb = await db
        .collection("notifications")
        .where("uid", "==", uid ? uid : "")
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendFirestore = async (isPost) => {
    setLoading(true);
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
      setLoading(false);
      setOpen(false);
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
        <Button
          variant="contained"
          onClick={saveNotification}
          disabled={!title}
        >
          保存
        </Button>
        <Button
          onClick={handleOpen}
          disabled={!title || !md}
          // onClick={sendNotification}
          className={classes.buttonMargin}
          variant="contained"
        >
          確認
        </Button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{title}</h2>
            <ReactMarkdown source={md} escapeHtml={false} />

            <div className={classes.btnWrap}>
              <Button onClick={handleClose} variant="contained">
                閉じる
              </Button>
              <div className={classes.wrapper}>
                <Button
                  onClick={sendNotification}
                  disabled={loading}
                  variant="contained"
                  color="primary"
                >
                  投稿
                </Button>

                {loading && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </App>
  );
}
