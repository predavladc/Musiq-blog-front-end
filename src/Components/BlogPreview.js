import { Link } from "react-router-dom";
import { Typography, Grid, Box } from "@mui/material";
import { Button } from "@mui/material";
import DatePosted from "./DatePosted";
import { useEffect, useState } from "react";
import serverURL from "../serverURL.js";

const BlogPreview = ({ id }) => {
  const [blogPreview, setBlogPreview] = useState();
  useEffect(() => {
    fetch(`${serverURL}/routes/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogPreview(data[0]);
      });
  }, []);

  if (!blogPreview) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Typography variant="h4">{blogPreview.title}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Button
            component={Link}
            to={`/author/${blogPreview.author_id}`}
            variant="text"
            color="secondary"
          >
            <Typography variant="overline">{blogPreview.name}, </Typography>
          </Button>
          <span>posted </span>
          <DatePosted date={blogPreview.created_at} />
          <div dangerouslySetInnerHTML={{ __html: blogPreview.summary }}></div>
        </Grid>
        <Grid item xs={12} sm={4} align="center">
          <Box
            component="img"
            className="RockLogo blogImgPreview"
            alt="Logo"
            src={`${serverURL}/images/${blogPreview.hero_img}`}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogPreview;
