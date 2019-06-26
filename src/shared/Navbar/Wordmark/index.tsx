import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Wordmark = () => {
  const classes = styles();
  return (
    <Typography variant="h6" color="inherit">
      <Link to="/" className={classes.wordmark}>GeekText</Link>
    </Typography>
  );
};

const styles = makeStyles(theme => ({
  wordmark: {
    textDecoration: "none",
    color: "white"
  }
}));

export default Wordmark;
