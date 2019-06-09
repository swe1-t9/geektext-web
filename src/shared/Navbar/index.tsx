import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

const withNavbar = (Component: React.FC): React.FC => () => (
  <>
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          GeekText
        </Typography>
      </Toolbar>
    </AppBar>
    <Component />
  </>
);

export { withNavbar };
