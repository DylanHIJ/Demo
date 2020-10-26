import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  highlightList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    overflowX: "auto",
  },
  highlight: {
    height: theme.spacing(11),
    width: theme.spacing(11),
    margin: 17,
    border: "solid 4px rgba(255, 255, 255, 0)",
    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.15)",
  },
  highlightCaption: {
    textAlign: "center",
  },
}));

export default function Highlight() {
  const classes = useStyles();
  return (
    <ul className={classes.highlightList}>
      {Array.from(new Array(9), (val, index) => 2 * index + 1).map((value) => (
        <li key={value}>
          <a href="/">
            <Avatar src={`post/${value}.jpg`} className={classes.highlight} />
          </a>
          <p className={classes.highlightCaption}>{`Highlight_${value}`}</p>
        </li>
      ))}
    </ul>
  );
}
