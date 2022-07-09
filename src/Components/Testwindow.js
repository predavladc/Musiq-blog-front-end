import { useEffect, useState } from "react";
import { Paper, Button, Typography, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import serverURL from "../serverURL.js";
import DatePosted from "./DatePosted";
import { useNavigate } from "react-router-dom";

const Testwindow = () => {
  console.log("testwindow");
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${serverURL}/routes/blogs/style/rock`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  if (!data) {
    return <p>Loading.</p>;
  }

  return (
    <div className="blogList">
      {data.map((blog, index) => {
        return (
          <div key={index} className="previewCard">
            <Paper
              style={{
                padding: "30px",
                margin: "20px",
                backgroundColor: "#eceef1",
              }}
            >
              <div className="previewCard">
                <Typography variant="h4">{blog.title}</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                    <Button
                      component={Link}
                      to={`/author/${blog.author_id}`}
                      variant="text"
                      color="secondary"
                    >
                      <Typography variant="overline">{blog.name}, </Typography>
                    </Button>
                    <span>posted </span>
                    <DatePosted date={blog.created_at} />
                    <div
                      dangerouslySetInnerHTML={{ __html: blog.summary }}
                    ></div>
                  </Grid>
                  <Grid item xs={3} align="center">
                    <Box
                      component="img"
                      className="RockLogo blogImgPreview"
                      alt="Logo"
                      src={`${serverURL}/images/${blog.hero_img}`}
                    />
                  </Grid>
                </Grid>
              </div>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate(`../${blog.article_id}`)}
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

export default Testwindow;
