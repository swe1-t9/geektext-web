import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
};

const useStyles = makeStyles({
  progress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Loading;
