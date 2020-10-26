import { React, useState } from "react";
import { Container, Button, makeStyles } from "@material-ui/core";

import Account from "./components/Account";
import Gallery from "./containers/Gallery";
import Navbar from "./components/Navbar";
import Highlight from "./containers/Highlight";
import ButtonGroup from "./components/ButtonGroup";
import "./App.css";

const useStyles = makeStyles({
  loadMore: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },
});

export default function App() {
  const [numImages, setNumImages] = useState(9);
  const [currentTab, setCurrentTab] = useState("post");
  const [numPosts] = useState({ post: 19, igtv: 4, tagged: 19 });
  const [numFollowers] = useState(5173);
  const [numFollowings] = useState(227);

  const classes = useStyles();
  const handleLoadMore = () => {
    setNumImages(Math.min(numImages + 9, numPosts[currentTab]));
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Account
          numPosts={numPosts}
          numFollowers={numFollowers}
          numFollowings={numFollowings}
        />
        <Highlight />
        <ButtonGroup
          currentTab={currentTab}
          numPosts={numPosts}
          setCurrentTab={setCurrentTab}
          setNumImages={setNumImages}
        />
        <Gallery numImages={numImages} tab={currentTab} />
        <div className={classes.loadMore}>
          {numImages < numPosts[currentTab] && (
            <Button variant="outlined" onClick={handleLoadMore}>
              Load More
            </Button>
          )}
        </div>
      </Container>
    </>
  );
}
