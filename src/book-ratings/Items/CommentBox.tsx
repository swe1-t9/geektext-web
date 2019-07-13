import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }),
);

interface State {
  name: string;
  age: string;
  multiline: string;
  currency: string;
}

export default function OutlinedTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="outlined-multiline-static"
        label="Comment on this book!"
        multiline
        rows="10"
        defaultValue=" "
        className={classes.textField}
        margin="normal"
        fullWidth
        variant="outlined"
      />
     
    </form>
  );
}
