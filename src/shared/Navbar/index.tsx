import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles'; 
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import CartButton from '../CartButton'

const withNavbar = (Component: React.FC): React.FC => () => {
  const classes = styles();
  return(
  <>
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          GeekText
        </Typography>
        {/* Place any buttons that need to be right-aligned in this div. */}
        <div className={classes.menuButton}>
          <CartButton/>
        </div>
      </Toolbar>
    </AppBar>
    <Component />
  </>
  );
}

const styles = makeStyles(theme => ({
  menuButton: {
      marginLeft: 'auto',
  },
}));

export { withNavbar };
