import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';

import { commit as commitSignUpMutation } from '../../graphql/mutations/SignUpMutation';

const Signup = () => {
  const classes = styles();

  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleTextChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >,
    setStateFn: React.Dispatch<React.SetStateAction<string>>
  ) => setStateFn(e.target.value);

  const onSignUpSuccess = () => console.log('success');
  const onSignUpFailure = (error: Error) => console.log(error);

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log({
      email,
      first_name: firstName,
      last_name: lastName,
      password
    });
    commitSignUpMutation(
      {
        email,
        first_name: firstName,
        last_name: lastName,
        password
      },
      onSignUpSuccess,
      onSignUpFailure
    );
  };

  return (
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
