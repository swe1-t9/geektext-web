import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BookIcon from "@material-ui/icons/Book";
import IconButton from "@material-ui/core/IconButton";

const bookButton = () => {
  const classes = styles();
  return (
    <IconButton
      color="default"
      id="book-button"
      aria-label="View Books"
      edge="end"
      component={Link}
      to="/book"
      className={classes.button}
    >
      <BookIcon />
    </IconButton>
  );
};

const styles = makeStyles(theme => ({
  button: {
    marginLeft: "15px",
    float: "right"
  }
}));

export default bookButton;