import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import GridOnIcon from "@material-ui/icons/GridOn";
import TvIcon from "@material-ui/icons/Tv";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid #dbdbdb",
  },
  controlButton: {
    color: "#8e8e8e",
    padding: theme.spacing(2, 1, 2, 1),
    borderRadius: "0% 0% 10% 10%",
  },
  selected: {
    borderTop: "1px solid rgb(0, 0, 0)",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));
export default function ButtonGroup(props) {
  const [control, setControl] = useState("post");
  const handleControl = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText === "POST") setControl("post");
    else if (event.target.innerText === "IG TV") setControl("igtv");
    else if (event.target.innerText === "TAGGED") setControl("tagged");
  };
  const classes = useStyles();
  return (
    <div className={classes.buttonGroup}>
      <Button
        id="post"
        className={`${classes.controlButton} ${
          control === "post" ? classes.selected : ""
        }`}
        onClick={handleControl}
      >
        <GridOnIcon className={classes.icon} />
        Post
      </Button>
      <Button
        id="igtv"
        className={`${classes.controlButton} ${
          control === "igtv" ? classes.selected : ""
        }`}
        onClick={handleControl}
      >
        <TvIcon className={classes.icon} />
        IG TV
      </Button>
      <Button
        id="tagged"
        className={`${classes.controlButton} ${
          control === "tagged" ? classes.selected : ""
        }`}
        onClick={handleControl}
      >
        <AssignmentIndIcon className={classes.icon} />
        Tagged
      </Button>
    </div>
  );
}
