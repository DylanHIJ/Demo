import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import GridOnIcon from "@material-ui/icons/GridOn";
import TvIcon from "@material-ui/icons/Tv";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const useStyles = makeStyles((theme) => ({
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

export default function TabButton(props) {
  const { tabValue, numPosts, currentTab, setCurrentTab, setNumImages } = props;
  const classes = useStyles();
  const handleControl = () => {
    if (currentTab !== tabValue) setNumImages(Math.min(numPosts[tabValue], 9));
    setCurrentTab(tabValue);
  };
  return (
    <Button
      className={`${classes.controlButton} ${
        currentTab === tabValue ? classes.selected : ""
      }`}
      onClick={handleControl}
    >
      {tabValue === "post" ? (
        <GridOnIcon className={classes.icon} />
      ) : tabValue === "igtv" ? (
        <TvIcon className={classes.icon} />
      ) : (
        <AssignmentIndIcon className={classes.icon} />
      )}
      {tabValue}
    </Button>
  );
}
