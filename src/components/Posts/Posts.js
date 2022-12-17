import { Box, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

import Lottie from "lottie-react";
import loading from "../../images/loading.json";

const Posts = () => {
  const style = {
    height: 600,
  };

  const { posts, isLoading } = useSelector((state) => state.posts);

  if (!posts.length && !isLoading) return "No posts found";
  return isLoading ? (
    <Box>
      <Lottie animationData={loading} style={style} loop={true} />
    </Box>
  ) : (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "#6b7688",
              fontSize: "24px",
              fontWeight: "600",
              mt: "24px",
            }}
          >
            All Posts
          </Typography>
        </Box>
      </Grid>
      {posts.map((post, i) => (
        <Grid key={i} item xs={12} sm={6} lg={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Post post={post} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
