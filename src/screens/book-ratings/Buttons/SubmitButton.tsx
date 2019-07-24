/*used in the comment component to post the user rating */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SubmitButton = (props:any) => {
    const classes = useStyles();

    return(
        <Button variant="contained" className={classes.button} onClick={props.onPress} disabled={props.disabled}>
          Create Customer Review
        </Button>
    );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    button: {
      margin: theme.spacing(1),
      fontSize: 12,
      textAlign: 'center',
      justifyContent: 'center',
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
  }),
);

export default SubmitButton;