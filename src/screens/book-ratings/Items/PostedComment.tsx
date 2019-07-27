/*Card that holds the user's comment, star rating, date, and avatar*/
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Rater from 'react-rater';
import Typography from '@material-ui/core/Typography';

const CommentCard = (props:any) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} raised={true} >
      <CardHeader
        avatar={props.icon}
        title={props.userName}
        subheader={props.date}
        action={<Rater total = {5} rating={props.ratingGiven} interactive={false}/>}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {props.comment}
        </Typography>
      </CardContent>

    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
    card: {
      maxWidth: 450,
      margin:  theme.spacing(2),
    },
  }),
);

export default CommentCard;
