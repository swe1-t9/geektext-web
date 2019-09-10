/*Card that holds the user's comment, star rating, date, and avatar*/
import React from 'react';
import Anon from '@material-ui/icons/AccountCircle';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Rater from 'react-rater';
import Avatar from '../Items/LetterAvatar';
import Typography from '@material-ui/core/Typography';
import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { Review_review } from './__generated__/Review_review.graphql';

type Props = {
  review: Review_review;
};


const Review: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} raised={true} >
      <CardHeader
        avatar={<Avatar initial={props.review.is_anonymous ? <Anon /> : props.review.reviewer.first_name.charAt(0)} />}
        title={props.review.title}
        subheader={props.review.is_anonymous ? "Anonymous": props.review.reviewer.first_name }
        action={<Rater total={5} rating={props.review.rating} interactive={false} />}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.review.title}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {props.review.body}
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
      margin: theme.spacing(2),
    },
  }),
);

export default createFragmentContainer(Review, {
  review: graphql`
	  fragment Review_review on Review {
      title
      reviewer {
        first_name
      }
      body
      rating
      is_anonymous
	  }
	`
});
