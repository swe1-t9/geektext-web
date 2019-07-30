import { Redirect } from 'react-router';
import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { BookDetailsView_bookDetails } from './__generated__/BookDetailsView_bookDetails.graphql';
import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
  Grid,
  Theme,
  IconButton,
  Collapse,
  Link
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import Commentbox from '../book-ratings/Components/CommentComponent';
import Scoreboard from '../book-ratings/Components/BookInfoComponent';

import { commit as commitAddToShoppingCartMutation } from '../../graphql/mutations/AddToShoppingCartMutation';
import { commit as commitAddToSavedCartMutation } from '../../graphql/mutations/AddToSavedCartMutation';

type Props = {
  bookDetails: BookDetailsView_bookDetails;
};

const BookDetailsView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [openAuthorBrowsing, setOpenAuthorBrowsing] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [added, setAdded] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [imageIsExpanded, setImageIsExpanded] = React.useState(false);
  const [, updateState] = React.useState();

  function handleExpandClick() {
    setExpanded(!expanded);
  }

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
        book_id: props.bookDetails.id,
        amount: 1
      },
      onAddToShoppingCartSuccess,
      onAddToCartFailure
    );
  };

  const toggleImage = () => {
    setImageIsExpanded(!imageIsExpanded);
  };

  const addToSavedCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // TODO: add proper mechanism for getting amount of books to add
    commitAddToSavedCartMutation(
      {
        book_id: props.bookDetails.id,
        amount: 1
      },
      onAddToSavedCartSuccess,
      onAddToCartFailure
    );
  };
  return openAuthorBrowsing ? (
    <Redirect
      to={{
        pathname: '/author-browsing',
        state: { id: props.bookDetails.author.id }
      }}
    />
  ) : (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia //Mui-expanded
            className={imageIsExpanded ? classes.expandImage : classes.media}
            image={props.bookDetails.cover}
            onClick={toggleImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.bookDetails.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.bookDetails.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: ${props.bookDetails.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={addToShoppingCart}>
            {added ? 'In Cart' : 'Add to Shopping Cart'}
          </Button>
          <Button size="small" color="primary" onClick={addToSavedCart}>
            {saved ? 'Saved' : 'Save for Later'}
          </Button>
          {/* <Button size="small" color="primary">
            More
          </Button> */}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h5" align="center">
              {' '}
              About the Author{' '}
            </Typography>
            <Typography paragraph align="center">
              <Link onClick={() => setOpenAuthorBrowsing(true)}>
                {props.bookDetails.author.first_name}{' '}
                {props.bookDetails.author.last_name}
              </Link>
            </Typography>
            <Typography paragraph>{props.bookDetails.author.bio}</Typography>
            <Typography paragraph> Genre: {props.bookDetails.genre}</Typography>
            <Typography paragraph>
              {' '}
              Publish Year: {props.bookDetails.publish_year}
            </Typography>
            <Commentbox />
            <Scoreboard />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: 10,
      marginLeft: 10,
      maxWidth: 500,
      background: '#000000'
    },
    media: {
      height: 200,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    expandImage: {
      height: 700,
      width: 500
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

export default createFragmentContainer(BookDetailsView, {
  bookDetails: graphql`
    fragment BookDetailsView_bookDetails on Book {
      id
      title
      author {
        id
        first_name
        last_name
        bio
      }
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
