import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartButton from "./CartButton";

const RightAlignedButtons = () => {
  const classes = styles();
  // Add any right-aligned navbar buttons into the following div
  return (
    <div className={classes.menuButton}>
      <CartButton />
    </div>
  );
};

const styles = makeStyles(theme => ({
  menuButton: {
    // Ensures buttons are right-aligned
    marginLeft: "auto"
  }
}));

export default RightAlignedButtons;
