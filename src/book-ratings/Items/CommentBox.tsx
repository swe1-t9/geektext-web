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
  maxWords: number,
  minWords: number
}


export default function OutlinedTextFields(props:any) {
  const classes = useStyles();
  var wordCountError = false;


  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="user comment"
        error = {wordCountError}
        disabled = {props.disabled}
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
