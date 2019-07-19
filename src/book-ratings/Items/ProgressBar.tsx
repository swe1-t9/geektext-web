import React, {useState} from 'react';
import { lighten, makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const FIVEStarBar = withStyles({
  root: {
    height: 20,
    width: 300, //width of the bar itself
    backgroundColor: lighten('#C1C1C1', 0.5), //lighter background color of bar. keep same for all 
  },
  bar: {
    borderRadius: 20,
    //background: linear-gradient(angle, color-stop1, color-stop2);
    background: 'linear-gradient(45deg, #66ff66 30%, #009933 90%)',
  },
})(LinearProgress);

const FOURStarBar = withStyles({
  root: {
    height: 20,
    width: 300, //width of the bar itself
    backgroundColor: lighten('#C1C1C1', 0.5), //lighter background color of bar. keep same for all 
  },
  bar: {
    borderRadius: 20,
    //background: linear-gradient(angle, color-stop1, color-stop2);
    background: 'linear-gradient(45deg, #ccff33 30%, #66ff66 90%)',
  },
})(LinearProgress);

const THREEStarBar = withStyles({
  root: {
    height: 20,
    width: 300, //width of the bar itself
    backgroundColor: lighten('#C1C1C1', 0.5), //lighter background color of bar. keep same for all 
  },
  bar: {
    borderRadius: 20,
    //background: linear-gradient(angle, color-stop1, color-stop2);
    background: 'linear-gradient(45deg, #ffcc00 30%, #ccff33 90%)',
  },
})(LinearProgress);

const TWOStarBar = withStyles({
  root: {
    height: 20,
    width: 300, //width of the bar itself
    backgroundColor: lighten('#C1C1C1', 0.5), //lighter background color of bar. keep same for all 
  },
  bar: {
    borderRadius: 20,
    //background: linear-gradient(angle, color-stop1, color-stop2);
    background: 'linear-gradient(45deg, #FF8E53 30%, #ffcc00 90%)',
  },
})(LinearProgress);

const ONEStarBar = withStyles({
  root: {
    height: 20,
    width: 300, //width of the bar itself
    backgroundColor: lighten('#C1C1C1', 0.5), //lighter background color of bar. keep same for all 
  },
  bar: {
    borderRadius: 20,
    //background: linear-gradient(angle, color-stop1, color-stop2);
    background: 'linear-gradient(45deg, #cc0000 30%, #FF8E53 90%)',
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

  /*default is 5 star bar. determine bar color depening on star prop*/
  var bar = <FIVEStarBar
            className={classes.margin}
            variant="determinate"
            color="primary"
            value={props.rating}
          /> ;

  switch(props.star)
  {
    case 1: bar = <ONEStarBar
                  className={classes.margin}
                  variant="determinate"
                  color="primary"
                  value={props.rating}
                /> ;
          break;
    case 2: bar = <TWOStarBar
                  className={classes.margin}
                  variant="determinate"
                  color="primary"
                  value={props.rating}
                /> ;
          break;
    case 3:bar = <THREEStarBar
                className={classes.margin}
                variant="determinate"
                color="primary"
                value={props.rating}
              /> ;
          break;
    case 4:bar = <FOURStarBar
                className={classes.margin}
                variant="determinate"
                color="primary"
                value={props.rating}
              /> ;
          break;
  }

  return (
    <div className={classes.root}>{bar}</div>
  );
}
