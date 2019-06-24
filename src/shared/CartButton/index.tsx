import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

// required for react-router-dom < 6.0.0
// see https://github.com/ReactTraining/react-router/issues/6056#issuecomment-435524678
const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <Link innerRef={ref as any} {...props} />
));

const CartButton = () => (
        <IconButton 
        color="default" 
        id="cart-button" 
        aria-label="View Shopping Cart"
        edge="end"
        component={AdapterLink} to="/cart"
        >
        <ShoppingCartIcon/>
        </IconButton>
);

export default CartButton;