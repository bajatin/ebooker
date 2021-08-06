import React, { useRef, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import SingleCard from "../searchpage/singleCard";
import { Container } from "@material-ui/core";
import useStyles from "../searchpage/styles";

// shelf 0: currently reading, shelf 1: want to read, shelf 2: finished reading
const Mybooks = () => {
  // const [books, setBooks] = React.useState();
  var reading = useRef([]);
  var read = useRef([]);
  var wantread = useRef([]);
  const classes = useStyles();

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookdb"));
    reading.current = Object.entries(data).filter(
      (eachObj) => eachObj[1].shelf === "0"
    );
    read.current = Object.entries(data).filter(
      (eachObj) => eachObj[1].shelf === "2"
    );
    wantread.current = Object.entries(data).filter(
      (eachObj) => eachObj[1].shelf === "1"
    );
    // read['current'].map((it) => (console.log(it[1].dets)))
    // console.log(read["current"]);
  }, []);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h6"> Currently Reading</Typography>
      <Divider variant="middle" />
      <Carousel>
        {reading["current"].map((it) => (
          <SingleCard card={it[1].dets} />
        ))}
      </Carousel>
      <Typography variant="h6"> Want to Read</Typography>
      <Divider variant="middle" />
      <Carousel>
        {wantread["current"].map((it) => (
          <SingleCard card={it[1].dets} />
        ))}
      </Carousel>
      <Typography variant="h6"> Finished Reading</Typography>
      <Divider variant="middle" />
      <Carousel>
        {read["current"].map((it) => (
          <SingleCard card={it[1].dets} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Mybooks;
