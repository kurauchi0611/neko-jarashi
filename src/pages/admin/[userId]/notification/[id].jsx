import { makeStyles } from "@material-ui/core/styles";
import React from "react";
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
  const [selectedTab, setSelectedTab] = React.useState("write");

  return (
    <App>
      <TextField
        className={classes.title}
        id="standard-basic"
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
        id="standard-basic"
        label="サイトURL"
      />

      <div className={classes.button}>
        <Button variant="contained">保存</Button>
        <Button className={classes.buttonMargin} variant="contained">
          投稿
        </Button>
      </div>
    </App>
  );
}