import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import * as React from 'react';

import { commit as commitSignUpMutation } from '../../graphql/mutations/SignUpMutation';
import { SignUpMutationResponse } from '../../graphql/mutations/__generated__/SignUpMutation.graphql';
import { handleTextChange } from '../../shared/text';
import { setToken } from '../../shared/token';
import { isLoggedIn } from '../../shared/auth';

const Signup = () => {
  const classes = styles();

  const [, forceUpdate] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [addressLine1, setAddressLine1] = React.useState('');
  const [addressLine2, setAddressLine2] = React.useState('');
  const [addressLine3, setAddressLine3] = React.useState('');
  const [city, setCity] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');

  const onSignUpSuccess = (response: SignUpMutationResponse) => {
    setToken(response.signUp);
    forceUpdate(n => !n);
  };
  const onSignUpFailure = (error: Error) => console.warn(error);

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    commitSignUpMutation(
      {
        email,
        username,
        first_name: firstName,
        last_name: lastName,
        password,
        address_line_1: addressLine1,
        address_line_2: addressLine2.length > 0 ? addressLine2 : null,
        address_line_3: addressLine3.length > 0 ? addressLine3 : null,
        region: region.length > 0 ? region : null,
        city,
        country,
        postal_code: postalCode
      },
      onSignUpSuccess,
      onSignUpFailure
    );
  };

  return isLoggedIn() ? (
    <Redirect to="/" />
  ) : (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={e => handleTextChange(e, setEmail)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={e => handleTextChange(e, setUsername)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="first-name"
              label="First Name"
              name="first-name"
              onChange={e => handleTextChange(e, setFirstName)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="last-name"
              label="Last Name"
              name="last-name"
              onChange={e => handleTextChange(e, setLastName)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="address-line-1"
              label="Address Line 1"
              name="address-line-1"
              onChange={e => handleTextChange(e, setAddressLine1)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="address-line-2"
              label="Address Line 2"
              name="address-line-2"
              onChange={e => handleTextChange(e, setAddressLine2)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="address-line-3"
              label="Address Line 3"
              name="address-line-3"
              onChange={e => handleTextChange(e, setAddressLine3)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="city"
              label="City"
              name="city"
              onChange={e => handleTextChange(e, setCity)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="region"
              label="Region (State)"
              name="region"
              onChange={e => handleTextChange(e, setRegion)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="country"
              label="County"
              name="county"
              onChange={e => handleTextChange(e, setCountry)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              id="postal-code"
              label="Postal Code"
              name="postal-code"
              onChange={e => handleTextChange(e, setPostalCode)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              fullWidth={true}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => handleTextChange(e, setPassword)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

const styles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage:
      'url(https://assets.manualcreative.com/wp-content/uploads/2014/09/Google_Material-Design_10-2998x1998.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

export default Signup;
