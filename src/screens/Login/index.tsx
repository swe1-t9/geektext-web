import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import * as React from 'react';

import { commit as commitLogInMutation } from '../../graphql/mutations/LogInMutation';
import { LogInMutationResponse } from '../../graphql/mutations/__generated__/LogInMutation.graphql';
import { handleTextChange } from '../../shared/text';
import { setToken } from '../../shared/token';
import { isLoggedIn } from '../../shared/auth';

const Login = () => {
  const classes = styles();

  const [, forceUpdate] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLogInSuccess = (response: LogInMutationResponse) => {
    setToken(response.logIn);
    forceUpdate(n => !n);
  };

  const onLogInFailure = (error: Error) => console.warn(error);

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    commitLogInMutation(
      {
        email,
        password
      },
      onLogInSuccess,
      onLogInFailure
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
            Log in
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
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={e => handleTextChange(e, setPassword)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Typography variant="body2">
                  <Link to="/signup" className={classes.link}>
                    {'Create an account'}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
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
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

export default Login;
