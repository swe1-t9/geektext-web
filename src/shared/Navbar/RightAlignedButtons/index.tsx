import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartButton from "./CartButton";

const RightAlignedButtons = () => {
  const classes = styles();
  return (
    <div className={classes.menuButton}>
      <CartButton />
    </div>
  );
};

const styles = makeStyles(theme => ({
  menuButton: {
    marginLeft: "auto"
  }
}));

export default RightAlignedButtons;
