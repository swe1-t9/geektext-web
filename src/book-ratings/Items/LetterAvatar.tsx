import React from 'react'; 
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { indigo } from '@material-ui/core/colors';

const useStyles = makeStyles(
  createStyles({
    avatar: {
      margin: 10,
    },
    orangeAvatar: {
      margin: 10,
      color: '#fff',
      backgroundColor: indigo[900],
    },
  }),
);

export default function LetterAvatar(props: any) {
  const classes = useStyles();

  return (
      <Avatar className={classes.orangeAvatar} color="primary">{props.initial}</Avatar>
  );
}
