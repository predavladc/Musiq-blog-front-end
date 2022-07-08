import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Bloglist from "./Components/Bloglist";
import Blog from "./Components/Blog";
import Author from "./Components/Author";
import Topnav from "./Components/Topnav";
import Genre from "./Components/Genre";
import Testwindow from "./Components/Testwindow";
import { Container, Box, Grid, Paper } from "@mui/material";

function App() {
  return (
    <div className="container">
      <Container
        className="App"
        style={{ width: "100%" }}
        justify="center"
        elevate={2}
      >
        <Topnav />
        <Paper elevation={2}>
          <Grid container>
            <Grid item xs={12}>
              <Box className="headerContainer">
                <Header />
              </Box>
            </Grid>
          </Grid>
          <div className="main">
            <Routes>
              <Route path="/" element={<Bloglist />} />
              <Route path=":blogId" element={<Blog />} />
              <Route path="/author/:authorId" element={<Author />} />
              <Route path="/style/:genreId" element={<Genre />} />
              <Route path="/test" element={<Testwindow />} />
            </Routes>
          </div>
          <Footer />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
