import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange} from '@material-ui/core/colors';

const useStyles = makeStyles(
  createStyles({
    avatar: {
      margin: 10,
    },
    orangeAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: deepOrange[500],
    },
  }),
);

export default function LetterAvatar(props: any) {
  const classes = useStyles();

  return (
      <Avatar className={classes.orangeAvatar}>{props.initial}</Avatar>
  );
}
