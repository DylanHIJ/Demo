import { React, useState } from "react";
import { Container, Button, Grid, Avatar, makeStyles } from "@material-ui/core";

import Gallery from "./containers/Gallery";
import Navbar from "./containers/Navbar";
import Profile from "./containers/Profile";
import Highlight from "./containers/Highlight";
import ButtonGroup from "./containers/ButtonGroup";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "flex",
    justifyContent: "center",
    margin: 30,
  },

  loadMore: {
    display: "flex",
    justifyContent: "center",
    margin: 20,
  },

  avatarImg: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: "solid 1px rgba(0, 0, 0, 0.15)",
  },
}));

export default function App() {
  const [numImages, setNumImages] = useState(9);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [numPosts] = useState(19);
  const [numFollowers] = useState(5173);
  const [numFollowings] = useState(227);

  const classes = useStyles();
  const handleLoadMore = (event) => {
    if (numImages + 9 >= numPosts) setShowLoadMore(false);
    setNumImages(Math.min(numImages + 9, numPosts));
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className={classes.avatar}>
              <a href="https://www.instagram.com/memopresso/">
                <Avatar
                  alt="Memopresso"
                  src="/user_avatar.jpg"
                  className={classes.avatarImg}
                />
              </a>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Profile
              numPosts={numPosts}
              numFollowers={numFollowers}
              numFollowings={numFollowings}
            />
          </Grid>
        </Grid>
        <Highlight />
        <ButtonGroup />
        <Gallery numImages={numImages} />
        <div className={classes.loadMore}>
          {showLoadMore && (
            <Button variant="outlined" onClick={handleLoadMore}>
              Load More
            </Button>
          )}
        </div>
      </Container>
    </>
  );
}
