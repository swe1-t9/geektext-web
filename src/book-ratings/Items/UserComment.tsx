/*Card that holds the user's comment, star rating, date, and avatar*/
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 450,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function CommentCard(props:any) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={props.icon}
        title={props.userName}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
