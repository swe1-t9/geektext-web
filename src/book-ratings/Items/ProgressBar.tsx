import React, {useState} from 'react';
import { lighten, makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    width: 300, //width of the bar itself
    backgroundColor: lighten('#C1C1C1', 0.5), //lighter background color of bar. keep same for all 
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#8bc34a', //color of bar progress. change depending on rating
  },
})(LinearProgress);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default function CustomizedProgressBars(props:any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={props.rating}
      />
    </div>
  );
}
