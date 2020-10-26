import React, { useState } from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";

const useStyles = makeStyles((theme) => ({
  loading: {
    zIndex: -1,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
  },
  postContainer: { position: "relative", height: "100%" },
  infoCover: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    zIndex: 2,
    top: 0,
    height: "100%",
    width: "100%",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingLeft: 0,
  },
  info: {
    color: "white",
    listStyle: "none",
    margin: theme.spacing(1),
    fontSize: theme.spacing(2),
  },
  infoIcon: {
    margin: theme.spacing(0.2),
  },
}));

export default function Post(props) {
  const { id } = props;
  const [isHover, setIsHover] = useState(false);
  const classes = useStyles();

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div
      className={classes.postContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classes.loading}>
        <CircularProgress />
      </div>
      <img
        src={`/covers/${id}.jpg`}
        className={classes.image}
        alt={`album_cover_${id}`}
      />
      {isHover && (
        <div className={classes.infoCover}>
          <ul className={classes.infoContainer}>
            <li className={classes.info}>
              <FavoriteIcon className={classes.infoIcon} />
              231
            </li>
            <li className={classes.info}>
              <ModeCommentIcon className={classes.infoIcon} />
              12
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
