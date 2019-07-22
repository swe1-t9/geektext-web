import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import React from 'react';

import { ProfileView_user } from './__generated__/ProfileView_user.graphql';
import { EditUserMutationResponse } from '../../graphql/mutations/__generated__/EditUserMutation.graphql';
import { commit as commitEditUserMutation } from '../../graphql/mutations/EditUserMutation';
import { handleTextChange } from '../../shared/text';

type Props = {
  user: ProfileView_user;
};

const ProfileView: React.FC<Props> = (props: Props) => {
  const classes = styles();

  const [editing, setEditing] = React.useState(false);
  const [firstName, setFirstName] = React.useState(props.user.firstName);
  const [lastName, setLastName] = React.useState(props.user.lastName);
  const [email, setEmail] = React.useState(props.user.email);

  const onEditUserSuccess = (response: EditUserMutationResponse) => {
    console.log('yay');
  };
  const onEditUserFailure = (error: Error) => {
    console.warn(error);
  };

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    commitEditUserMutation(
      {
        email,
        first_name: firstName,
        last_name: lastName
      },
      onEditUserSuccess,
      onEditUserFailure
    );
    setEditing(false);
  };

  return (
    <>
      <CssBaseline />
      <div>
        <Paper className={classes.profile}>
          <Typography gutterBottom variant="h5" component="h2">
            Profile
          </Typography>
          <IconButton onClick={() => setEditing(!editing)} size="small">
            <EditIcon />
          </IconButton>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                defaultValue={props.user.firstName}
                disabled={!editing}
                onChange={e => handleTextChange(e, setFirstName)}
                fullWidth
                autoComplete="fname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                defaultValue={props.user.lastName}
                disabled={!editing}
                onChange={e => handleTextChange(e, setLastName)}
                fullWidth
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email Address"
                defaultValue={props.user.email}
                disabled={!editing}
                onChange={e => handleTextChange(e, setEmail)}
                fullWidth
                autoComplete="email"
              />
            </Grid>
            {editing && (
              <Button type="submit" color="primary" onClick={submit}>
                Save Changes
              </Button>
            )}
          </Grid>
        </Paper>
      </div>
    </>
  );
};

const styles = makeStyles(theme => ({
  profile: {
    width: 'auto',
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
}));

export default createFragmentContainer(ProfileView, {
  user: graphql`
    fragment ProfileView_user on User {
      firstName: first_name
      lastName: last_name
      email
    }
  `
});
