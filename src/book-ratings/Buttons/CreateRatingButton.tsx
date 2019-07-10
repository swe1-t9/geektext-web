/*
For Caro's page that leads to the rating page 
*/
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(5),
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

export default function NewRateButton()
{
    const classes = useStyles();

    return(
        <Button variant="contained" color="secondary" className={classes.button}>
         Create Customer Review
       </Button>
    );
}