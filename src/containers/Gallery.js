import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: { maxWidth: "100%", maxHeight: "100%" },
  background: { backgroundColor: "rgba(0, 0, 0, 0.3" },
});

export default function Gallery(props) {
  const { numImages } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {Array.from(new Array(numImages), (val, index) => index).map((value) => (
        <Grid key={value} item xs={4}>
          <img
            src={`/covers/${value}.jpg`}
            className={classes.image}
            alt="album_cover"
          />
        </Grid>
      ))}
    </Grid>
  );
}
