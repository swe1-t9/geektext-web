import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { BookDetailsView_bookDetails } from './__generated__/BookDetailsView_bookDetails.graphql';
import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Button, Typography, CardActions } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';


type Props = {
  bookDetails: BookDetailsView_bookDetails;
};

const BookDetailsView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  return(
  // <div>{props.bookDetails.title}</div>
  // TODO: in BookDetailsView after everything else is generated for grpahql, this is last step
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="https://cdn.britannica.com/s:500x350/21/182021-004-532121B3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.bookDetails.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.bookDetails.title}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Add To Cart
        </Button>
      <Button size="small" color="primary">
        More
        </Button>
    </CardActions>
  </Card>
)};

const useStyles = makeStyles(
  createStyles({
    card: {
      marginTop: 10,
      marginLeft: 10,
      maxWidth: 325,
      background: '#000000'
    },
    media: {
      height: 198
    }
  })
);

export default createFragmentContainer(BookDetailsView, {
  bookDetails: graphql`
    fragment BookDetailsView_bookDetails on Book {
      book_id
      author_id
      title
      isbn
      genre
      publish_year
      price
    }
  `
});
