import React from "react";
import { Grid, Container } from "@material-ui/core";

import SingleCard from "./singleCard";

import useStyles from "./styles";

const BookCards = (props) => {
  const classes = useStyles();

  // console.log("bookCards called");
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.c.map((card, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <SingleCard card={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookCards;
