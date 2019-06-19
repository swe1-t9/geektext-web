import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, LinkProps } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';

// required for react-router-dom < 6.0.0
// see https://github.com/ReactTraining/react-router/issues/6056#issuecomment-435524678
const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link innerRef={ref as any} {...props} />
));

const withNavbar = (Component: React.FC): React.FC => () => (
  <>
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          GeekText
        </Typography>
        <IconButton color="default" id="cart-button" aria-label="View Shopping Cart" component={AdapterLink} to="/cart">
          <ShoppingCartIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Component />
  </>
);

export { withNavbar };
