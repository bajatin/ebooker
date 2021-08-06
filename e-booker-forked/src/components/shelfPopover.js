import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2)
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const SimplePopover = ({ book }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [books, setBooks] = React.useState({});
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    const data = localStorage.getItem("bookdb");

    if (data) {
      setBooks(JSON.parse(data));
    }
  }, []);

  const updateShelf = (newShelf) => {
    if (books[book.id]) {
      books[book.id].shelf = newShelf;
    } else {
      books[book.id] = { shelf: newShelf, dets: book };
    }
    localStorage.setItem("bookdb", JSON.stringify(books));
    setAnchorEl(null);
  };

  const removeBook = () => {
    delete books[book.id];
    // setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton aria-label="add to library" onClick={(e) => handleClick(e)}>
        <AddIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button onClick={() => updateShelf("0")}>
              <ListItemIcon>
                <BookmarkBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Currently reading" />
            </ListItem>
            <ListItem button onClick={() => updateShelf("1")}>
              <ListItemIcon>
                <ImportContactsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Want to Read" />
            </ListItem>
            <ListItem button onClick={() => updateShelf("2")}>
              <ListItemIcon>
                <LibraryBooksOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Finished Reading" />
            </ListItem>
            <ListItem button onClick={removeBook()}>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="Remove from Library" />
            </ListItem>
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default SimplePopover;
