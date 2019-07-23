import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

import { ShoppingCartView_user } from './__generated__/ShoppingCartView_user.graphql';
import { commit as commitSaveShoppingCartMutation } from '../../graphql/mutations/SaveShoppingCartMutation';
import { commit as commitRemoveFromShoppingCartMutation } from '../../graphql/mutations/RemoveFromShoppingCartMutation';
import { commit as commitRemoveFromSavedCartMutation } from '../../graphql/mutations/RemoveFromSavedCartMutation';

type Props = {
  user: ShoppingCartView_user;
};

const ShoppingCartView: React.FC<Props> = (props: Props) => {
  const classes = styles();

  var subtotal = 0;

  const onSaveShoppingCartSuccess = () => {
    // refresh the page on success to reflect changes to the client
    window.location.reload();
  };

  const onSaveShoppingCartFailure = (error: Error) => {
    console.warn(error);
    // TODO: do something here
  };

  const onRemoveFromCartSuccess = () => {
    // refresh the page on success to reflect changes to the client
    window.location.reload();
  };

  const onRemoveFromCartFailure = (error: Error) => {
    console.warn(error);
    // TODO: do something here
  };

  const saveShoppingCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    commitSaveShoppingCartMutation(
      onSaveShoppingCartSuccess,
      onSaveShoppingCartFailure
    );
  };

  const removeFromShoppingCart = (item_id: string) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    commitRemoveFromShoppingCartMutation(
      {
        item_id
      },
      onRemoveFromCartSuccess,
      onRemoveFromCartFailure
    );
  };

  const removeFromSavedCart = (item_id: string) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    commitRemoveFromSavedCartMutation(
      {
        item_id
      },
      onRemoveFromCartSuccess,
      onRemoveFromCartFailure
    );
  };

  // using curried function here for compatibility with object.map, 
  // and to allow one function to handle both shopping and saved carts
  const displayItem = (isShopping: boolean) => (item: Readonly<{
    readonly id: string;
    readonly book: {
      readonly title: string;
      readonly price: number;
      readonly cover: any;
    };
    readonly amount: number;
  }>) => {
    return (
      <Paper className={classes.bookBackground}>
        <Grid container spacing={2}>
          <Grid item xs={2} className={classes.cell}>
            <img src={item.book.cover} alt={item.book.title} className={classes.bookImage}></img>
          </Grid>
          <Grid item xs={4} className={classes.cell}>
            <Typography>
              {item.book.title}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              {item.amount}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>
              {item.book.price}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={isShopping ? removeFromShoppingCart(item.id) : removeFromSavedCart(item.id)}>
              <RemoveShoppingCartIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    )
  }

  const displayShoppingCart = () => {
    // length of items is 2 when empty, since it's []. in that case, show an empty message
    if (JSON.stringify(props.user.shoppingCart.items).length === 2)
      return (
        <Typography className={classes.bookRow}>Nothing's here yet. Go pick out some good books to buy!</Typography>
      )
    else
      return props.user.shoppingCart.items.map(displayItem(true))
  }

  const displaySavedCart = () => {
    // length of items is 2 when empty, since it's []. in that case, show an empty message
    if (JSON.stringify(props.user.savedCart.items).length === 2)
      return (
        <Typography className={classes.bookRow}>Any books you save for later will appear here.</Typography>
      )
    else
      return props.user.savedCart.items.map(displayItem(false))
  }

  return (
    <>
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <Paper>
            <Typography className={classes.bookRow} variant='h5'>Shopping Cart</Typography>
            <div>
              {displayShoppingCart()}
            </div>
          </Paper>
          <Paper>
            <Typography className={classes.bookRow} variant='h5'>Saved Items</Typography>
            <div>
              {displaySavedCart()}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.bookRow}>
            <Typography variant='h6'>
              Subtotal: {subtotal.toFixed(2)}
            </Typography>
            <Typography variant='h6'>
              Tax: {(subtotal * 0.07).toFixed(2)}
            </Typography>
            <Typography variant='h5'>
              Grand total: {(subtotal + (subtotal * 0.07)).toFixed(2)}
            </Typography>
            <Button
              variant='contained'
              color='primary'
              size='large'>
              Checkout
            </Button>
          </Paper>
          <Paper className={classes.bookRow}>
            <Button
              color='primary'
              size='large'
              onClick={saveShoppingCart}>
              Save for later
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const styles = makeStyles(theme => ({
  bookRow: {
    width: 'auto',
    display: 'grid',
    textAlign: 'center',
    verticalAlign: 'middle',
    gridTemplateColumns: 'auto',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  bookBackground: {
    width: 'auto',
    display: 'grid',
    background: '#505050',
    gridTemplateColumns: 'auto',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cell: {
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  bookImage: {
    width: '5em'
  }
}));

export default createFragmentContainer(ShoppingCartView, {
  user: graphql`
    fragment ShoppingCartView_user on User {
      shoppingCart: shopping_cart {
        items {
          id
          book {
            title
            price
            cover
          }
          amount
        }
      }
      savedCart: saved_cart {
        items {
          id
          book {
            title
            price
            cover
          }
          amount
        }
      }
    }
  `
});
