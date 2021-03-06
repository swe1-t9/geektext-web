import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

import { isLoggedIn } from '../../../auth';

const ProfileButton = () => {
  const classes = styles();
  return (
    <IconButton
      color="default"
      id="login-button"
      aria-label="Login/Create Account"
      edge="end"
      component={Link}
      to={isLoggedIn() ? '/me' : '/login'}
      className={classes.button}
    >
      <PersonIcon />
    </IconButton>
  );
};

const styles = makeStyles(theme => ({
  button: {
    marginLeft: '15px',
    float: 'right'
  }
}));

export default ProfileButton;
