import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Typography, CssBaseline, Grid, Container } from "@material-ui/core";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import useStyles from "../searchpage/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const HomePage = (props) => {
  useEffect(() => {}, []);

  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            {/* this is the header */}
            <ThemeProvider theme={theme}>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                E-Booker
              </Typography>

              {/* this will be the description */}
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Come explore the world of books. Browse through the internet and
                choose your favorites from millions books. Read your offline
                epubs online
              </Typography>
            </ThemeProvider>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <ButtonGroup
                    variant="text"
                    color="primary"
                    aria-label="text primary button group"
                  >
                    <Button onClick={() => history.push("/mybooks")}>
                      My Books
                    </Button>
                    <Button onClick={() => history.push("/browse")}>
                      Browse
                    </Button>
                    <Button onClick={() => history.push("/read")}>Read</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default React.memo(HomePage);
