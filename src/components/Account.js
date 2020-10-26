import React from "react";
import { Grid, Avatar, makeStyles } from "@material-ui/core";
import Profile from "./Profile";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "flex",
    justifyContent: "center",
    margin: 30,
  },
  avatarImg: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: "solid 1px rgba(0, 0, 0, 0.15)",
  },
}));

export default function Account(props) {
  const { numPosts, numFollowers, numFollowings } = props;
  const classes = useStyles();

  return (
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
  );
}
