import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import { useHistory } from "react-router-dom";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
  }
});

const AppBarCollapse = (props) => {
  const history = useHistory();
  return (
    <div className={props.classes.root}>
      <ButtonAppBarCollapse>
        <MenuItem onClick={() => history.push("/browse")}>Browse</MenuItem>
        <MenuItem onClick={() => history.push("/read")}>Read</MenuItem>
        <MenuItem onClick={() => history.push("/mybooks")}>My Books</MenuItem>
      </ButtonAppBarCollapse>
      <div className={props.classes.buttonBar} id="appbar-collapse">
        <Button color="inherit" onClick={() => history.push("/mybooks")}>
          My Books
        </Button>
        <Button color="inherit" onClick={() => history.push("/browse")}>
          Browse
        </Button>
        <Button color="inherit" onClick={() => history.push("/read")}>
          Read
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(AppBarCollapse);
