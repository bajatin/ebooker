import React, { useState } from "react";
import {
  Typography,
  CssBaseline,
  Container,
  TextField,
  Grid,
  CircularProgress
} from "@material-ui/core";
import { toast } from "react-toastify";
import { Button } from "@material-ui/core";
import BookCard from "./bookCards";
// import ButtonGroup from "@material-ui/core/ButtonGroup";

import useStyles from "./styles";

import axios from "axios";

// import BookCards from "./bookCards";
var query = "";
var cards = [];
const SearchPage = () => {
  const classes = useStyles();
  const maxResults = 12;
  const startIndex = 0;

  const [loading, setLoading] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log("handle submit called");
    setLoading(true);
    if (maxResults > 40 || maxResults < 1) {
      toast.error("max results must be between 1 and 40");
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then((res) => {
          if (startIndex >= res.data.totalItems || startIndex < 0) {
            toast.error(
              `max reults must be between 1 and ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              cards = res.data.items;
              setLoading(false);
            }
          }
        })
        .catch((err) => {
          setLoading(true);
          console.log(err.response);
        });
    }
  };

  const handleChange = (evt) => {
    query = evt.target.value;
    // console.log("handle change called");
  };

  const mainHeader = () => {
    // console.log("main header");
    return (
      <div className={classes.container}>
        <Container maxWidth="sm">
          {/* this is the header */}
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Search Books
          </Typography>
          <form
            onSubmit={(e) => handleSubmit(e)}
            style={{ justifyContent: "center" }}
          >
            <TextField
              id="filled-full-width"
              label="Book Name"
              style={{ margin: 8 }}
              placeholder="Example: Harry Potter"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="filled"
              onChange={(e) => handleChange(e)}
            />
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleSubmit(e)}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    );
  };

  const handleCards = () => {
    // console.log("handle cards called");
    if (loading) {
      // console.log("thinks loading is true");
      return (
        <>
          <CircularProgress />
        </>
      );
    } else {
      // console.log("loading is not true");
      // console.log(cards);
      return (
        <div className={classes.container}>
          <BookCard c={cards} />
        </div>
      );
    }
  };

  return (
    <>
      <CssBaseline />
      <main>
        {mainHeader()}
        {handleCards()}
      </main>
    </>
  );
};

export default SearchPage;
