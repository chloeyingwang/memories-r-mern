import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
//CircularProgress is a spinner
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          {/* xs means how large it is going it take on small screen which is mobile device */}
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
      {/* use {} to show we are going to use javascript */}
    </Grid>
  );
};

export default Posts;
