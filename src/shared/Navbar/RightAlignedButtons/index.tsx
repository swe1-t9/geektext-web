import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartButton from './ShoppingCartButton';
import ProfileButton from './ProfileButton';
import BookButton from './BookButton';

const RightAlignedButtons = () => {
  const classes = styles();
  // Add any right-aligned navbar buttons into the following div
  return (
    <div className={classes.menuBar}>
      <ProfileButton />
      <ShoppingCartButton />
      <BookButton />
    </div>
  );
};

const styles = makeStyles(theme => ({
  menuBar: {
    // Ensures buttons are right-aligned
    marginLeft: 'auto'
  }
}));

export default RightAlignedButtons;
