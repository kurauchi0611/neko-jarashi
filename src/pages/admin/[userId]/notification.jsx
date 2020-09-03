import { makeStyles } from "@material-ui/core/styles";
import React from "react";
// import ReactMarkdown from "react-markdown";
// import { CodeBlock } from "./codeBlock";
import ReactMde, { commands } from "react-mde";
import * as Showdown from "showdown";
import App from "../../../components/Admin/App";

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
    height: "100%",
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
  editer: {
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
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [text, setText] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");

  return (
    <App>
      {text}
      <div className={classes.wrap}>
        <div className={classes.inner}>
          <ReactMde
            className={classes.editer}
            value={text}
            onChange={setText}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>
      </div>
    </App>
  );
}
