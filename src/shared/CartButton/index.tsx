import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const CartButton = () => (
  <IconButton
    color="default"
    id="cart-button"
    aria-label="View Shopping Cart"
    edge="end"
    component={Link}
    to="/cart"
  >
    <ShoppingCartIcon />
  </IconButton>
);

export default CartButton;
