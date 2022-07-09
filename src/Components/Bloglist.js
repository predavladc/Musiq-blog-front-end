import BlogPreview from "./BlogPreview";
import { Link } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import serverURL from "../serverURL.js";

const Bloglist = () => {
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    fetch(`${serverURL}/routes/blogs`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBlogList(data);
      });
  }, []);
  if (!blogList) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="blogList">
      {blogList.map((blog, index) => {
        return (
          <div key={index} className="previewCard">
            <Paper
              style={{
                padding: "30px",
                margin: "20px",
                backgroundColor: "#eceef1",
              }}
            >
              <BlogPreview id={blog.id} />
              <Button
                component={Link}
                to={`${blog.id}`}
                variant="outlined"
                color="primary"
              >
                <Typography>Read more</Typography>
              </Button>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

export default Bloglist;
