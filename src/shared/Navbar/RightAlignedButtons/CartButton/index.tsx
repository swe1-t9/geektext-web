import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const CartButton = () => {
  const classes = styles();
  return (
    <IconButton
      color="default"
      id="login-button"
      aria-label="View Shopping Cart"
      edge="end"
      component={Link}
      to="/cart"
      className={classes.button}
    >
      <ShoppingCartIcon />
    </IconButton>
  );
};

const styles = makeStyles(theme => ({
  button: {
    marginLeft: "15px",
    float: "right"
  }
}));

export default CartButton;
