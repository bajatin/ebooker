import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import useStyles from "./styles";

import SimplePopover from "../components/shelfPopover";

const SingleCard = ({ card }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={
          card.volumeInfo.imageLinks ? card.volumeInfo.imageLinks.thumbnail : ""
        }
        title={card.volumeInfo.title}
      />

      <CardContent className={classes.CardContent}>
        <Typography gutterBottom variant="h5">
          {card.volumeInfo.title}
        </Typography>
        <Typography>{card.volumeInfo.authors}</Typography>
        <Typography>
          {card.searchInfo ? card.searchInfo.textSnippet : ""}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen("paper")}>
          Details
        </Button>
        <Button
          size="small"
          color="primary"
          target="_blank"
          href={card.volumeInfo.previewLink}
        >
          Preview
        </Button>
        <SimplePopover book={card} />
      </CardActions>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {card.volumeInfo.title}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <img
                src={
                  card.volumeInfo.imageLinks
                    ? card.volumeInfo.imageLinks.smallThumbnail
                    : ""
                }
                alt={card.volumeInfo.title}
                style={{ height: "233px" }}
              />
            </Grid>
            <Grid item>
              <Box textAlign="right" m={1}>
                <Typography>Page Count: {card.volumeInfo.pageCount}</Typography>
              </Box>
              <Box textAlign="right" m={1}>
                <Typography>Language : {card.volumeInfo.language}</Typography>
              </Box>
              <Box textAlign="right" m={1}>
                <Typography>Author : {card.volumeInfo.authors}</Typography>
              </Box>
              <Box textAlign="right" m={1}>
                <Typography>Publisher : {card.volumeInfo.publisher}</Typography>
              </Box>
              <Box textAlign="right" m={1}>
                <Typography>
                  Published : {card.volumeInfo.publishedDate}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <div style={{ marginTop: "35px" }}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Typography variant="paragraph">
                {card.volumeInfo.description}
              </Typography>
              <br />
            </DialogContentText>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            target="_blank"
            href={card.volumeInfo.infoLink}
          >
            More Info
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default SingleCard;
