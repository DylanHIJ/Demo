import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  profile: {
    margin: theme.spacing(2.5),
  },
  user: {
    display: "flex",
    height: theme.spacing(5),
    alignItems: "center",
    marginBottom: theme.spacing(2.5),
  },
  followButton: {
    marginLeft: theme.spacing(2.5),
    backgroundColor: "#0095f6",
    color: "white",
    fontWeight: "bold",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    listStyle: "none",
  },
  listItem: {
    marginRight: theme.spacing(4),
  },
  number: {
    fontWeight: 600,
  },
  link: {
    display: "block",
    fontWeight: 700,
    color: "#00376b",
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const { numPosts, numFollowers, numFollowings } = props;
  return (
    <div className={classes.profile}>
      <div className={classes.user}>
        <h2>memopresso</h2>
        <Button variant="contained" className={classes.followButton}>
          Follow
        </Button>
      </div>
      <div>
        <ul className={classes.info}>
          <li className={classes.listItem}>
            <span className={classes.number}>{numPosts.post}</span> Posts
          </li>
          <li className={classes.listItem}>
            <span className={classes.number}>{numFollowers}</span> Followers
          </li>
          <li className={classes.listItem}>
            <span className={classes.number}>{numFollowings}</span> Followings
          </li>
        </ul>
      </div>
      <div>
        <h4>
          MEMOPRESSO |{" "}
          <span role="img" aria-label="pin">
            📌
          </span>{" "}
          Taiwan
        </h4>
        <span>
          <span role="img" aria-label="love-letter">
            💌
          </span>
          Keep your memories forever.{" "}
          <span role="img" aria-label="lollipop">
            📍
          </span>
          台灣✈️韓國
          <br />
          #memopresso 分享你的列印美照
          <span role="img" aria-label="shine">
            ✨
          </span>
          合作事宜請洽business@memopresso.com
        </span>
        <a
          href="https://l.instagram.com/?u=http%3A%2F%2Flinktr.ee%2Fmemopresso&e=ATP_EyK_g73YYZtELo1CORGSpZcyAtiECWQYQyC1joZvpfJmJOnDkgzepuHvkStmNO-6MHiZVXxB5RfW&s=1inktr.ee/memopresso"
          className={classes.link}
        >
          linktr.ee/memopresso
        </a>
      </div>
    </div>
  );
}
