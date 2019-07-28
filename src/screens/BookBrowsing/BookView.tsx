import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createFragmentContainer } from 'react-relay';
import { BookView_book } from './__generated__/BookView_book.graphql';
import { commit as commitAddToShoppingCartMutation } from '../../graphql/mutations/AddToShoppingCartMutation';
import { commit as commitAddToSavedCartMutation } from '../../graphql/mutations/AddToSavedCartMutation';
import Menu from './Menu';

type Props = {
  book: BookView_book;
};

const BookView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [added, setAdded] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const onAddToShoppingCartSuccess = () => {
    setAdded(true);
    window.location.href = '/shopping-cart';
  };

  const onAddToCartFailure = (error: Error) => {
    console.warn(error);
    // if user tries to add to cart when not logged in, redirect to /login
    window.location.href = '/login';
  };

  const onAddToSavedCartSuccess = () => {
    setSaved(true);
    window.location.href = '/shopping-cart';
  };

  const addToShoppingCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // TODO: add proper mechanism for getting amount of books to add
    commitAddToShoppingCartMutation(
      {
        book_id: props.book.id,
        amount: 1
      },
      onAddToShoppingCartSuccess,
      onAddToCartFailure
    );
  };

  const addToSavedCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // TODO: add proper mechanism for getting amount of books to add
    commitAddToSavedCartMutation(
      {
        book_id: props.book.id,
        amount: 1
      },
      onAddToSavedCartSuccess,
      onAddToCartFailure
    );
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.book.cover} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title: {props.book.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.book.description}
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
      background: '#000000',
      horizontalAlign: 'center'
    },
    media: {
      height: 198
    }
  })
);

export default createFragmentContainer(BookView, {
  book: graphql`
    fragment BookView_book on Book {
      id
      author {
        id
        first_name
        last_name
      }
      title
      isbn
      genre
      publish_year
      price
      description
      cover
    }
  `
});

// export default Book;
