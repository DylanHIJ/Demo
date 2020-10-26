import React from "react";
import { makeStyles } from "@material-ui/core";
import TabButton from "./TabButton";

const useStyles = makeStyles({
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid #dbdbdb",
  },
});

export default function ButtonGroup(props) {
  const { currentTab, numPosts, setCurrentTab, setNumImages } = props;
  const classes = useStyles();

  return (
    <div className={classes.buttonGroup}>
      <TabButton
        tabValue="post"
        numPosts={numPosts}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setNumImages={setNumImages}
      />
      <TabButton
        tabValue="igtv"
        numPosts={numPosts}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setNumImages={setNumImages}
      />
      <TabButton
        tabValue="tagged"
        numPosts={numPosts}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setNumImages={setNumImages}
      />
    </div>
  );
}
