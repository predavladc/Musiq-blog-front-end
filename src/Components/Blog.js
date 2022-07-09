import { useParams, Link } from "react-router-dom";
import GoBack from "./GoBack";
import { Typography, Paper, Grid, Box, Button, Container } from "@mui/material";
import ShareLikeBlock from "./ShareLikeBlock.js";
import DatePosted from "./DatePosted";
import { useEffect, useState } from "react";
import serverURL from "../serverURL.js";

const Blog = () => {

  const [blogPost, setBlogPost] = useState();
  const { blogId } = useParams();

  useEffect(() => {
    fetch(`${serverURL}/routes/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogPost(data[0]);
      })
      .catch((err) => console.log({fetchArticleError: err.message}))
  }, []);

  if (!blogPost) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Paper className="blog" elevation={2}>
        <Typography variant="h3">{blogPost.title}</Typography>
        <Button
          component={Link}
          to={`/author/${blogPost.author_id}`}
          variant="text"
          color="secondary"
        >
          <Typography variant="overline">{blogPost.name},</Typography>
        </Button>
        <span>posted </span>
        <DatePosted date={blogPost.created_at} />
        <Container align="center">
          <Box
            component="img"
            className="RockLogo blogImg"
            alt="Logo"
            src={`${serverURL}/images/${blogPost.hero_img}`}
          />
        </Container>
        <div dangerouslySetInnerHTML={{ __html: blogPost.description }}></div>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item sm={10}>
              <GoBack />
            </Grid>
            <Grid item sm={2}>
              <Box>
                <ShareLikeBlock />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default Blog;
