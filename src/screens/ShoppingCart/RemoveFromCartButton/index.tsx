import React from "react";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const RemoveFromCartButton = () => {
  return (
    <IconButton
      color="default"
      id="login-button"
      aria-label="Remove From Shopping Cart"
      edge="end"
    >
      <RemoveShoppingCartIcon/>
    </IconButton>
  );
};

export default RemoveFromCartButton;
