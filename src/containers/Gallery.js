import React from "react";
import { Grid } from "@material-ui/core";
import Post from "./Post";

export default function Gallery(props) {
  const { numImages } = props;

  return (
    <Grid container spacing={4}>
      {Array.from(new Array(numImages), (val, index) => index).map((id) => (
        <Grid key={id} item xs={4}>
          <Post id={id} />
        </Grid>
      ))}
    </Grid>
  );
}
