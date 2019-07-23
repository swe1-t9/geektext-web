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

import { ShoppingCartView_user } from './__generated__/ShoppingCartView_user.graphql';

type Props = {
  user: ShoppingCartView_user;
};

const ShoppingCartView: React.FC<Props> = (props: Props) => {
  const classes = styles();
  console.log(props.user.shoppingCart.items[0].book.title)

  var subtotal = 0;

  return (
    <>
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <div>
            {props.user.shoppingCart.items.map(function(item){
              subtotal += (item.book.price * item.amount)
              return (
                <Paper className={classes.bookRow}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={3} className={classes.cell}>
                      <img src={item.book.cover} alt={item.book.title} className={classes.bookImage}></img>
                    </Grid>
                    <Grid item xs={6} sm={3} className={classes.cell}>
                      <Typography>
                        {item.book.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography>
                        {item.amount}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography>
                        {item.book.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              )
            })}
          </div>
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
            <Button variant='contained' color='primary' size='large'>
              Checkout
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
