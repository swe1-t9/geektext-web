import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartButton from "./CartButton";
import LoginButton from "./LoginButton";
import BookButton from "./BookButton";

const RightAlignedButtons = () => {
  const classes = styles();
  // Add any right-aligned navbar buttons into the following div
  return (
    <div className={classes.menuBar}>
      <LoginButton />
      <CartButton />
      <BookButton />
    </div>
  );
};

const styles = makeStyles(theme => ({
  menuBar: {
    // Ensures buttons are right-aligned
    marginLeft: "auto"
  }
}));

export default RightAlignedButtons;
