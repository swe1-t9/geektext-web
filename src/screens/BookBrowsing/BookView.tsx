import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookBrowsingView from './BookBrowsingView';
import { createFragmentContainer, graphql } from 'react-relay';

type Props = {
  cover: string, 
  title: string,
  description: string,
  authorName: string,
  price: string,

}
const Book = (props: Props) => {
  const classes = useStyles();

  return (

    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.cover}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.description}
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
  );
};

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

export default createFragmentContainer(BookBrowsingView, {
  Book: graphql`
    fragment BookView_Book on Book {
      id
      author{
        id
        first_name
        last_name
      }
      title
      isbn
      genre
      publish_year
      price
      title
      description
      cover
    }
  `
});

// export default Book;
