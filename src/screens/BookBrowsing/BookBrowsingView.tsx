import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { BookBrowsingView_bookBrowsing } from './__generated__/BookBrowsingView_bookBrowsing.graphql';
import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Button, Typography, CardActions, Grid, Theme, IconButton, Collapse, Link } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BookView from './BookView';
import { BookView_Book } from './__generated__/BookView_Book.graphql';


type Props = {

  bookBrowsing: BookBrowsingView_bookBrowsing;
  // sortedBooks: BookView_Book;
};

  const BookBrowsingView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();


    function FormRow() {
      return (
      
        <React.Fragment>
          <Grid item xs={4}>
          {props.bookBrowsing.sortedBooks.map(book => <Grid><BookView book={book} /></Grid>)}
      <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    );
  };

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
  bookImage: {
    width: '5em',
    horizontalAlign: 'middle'
  }
}),
);
   
export default createFragmentContainer(BookBrowsingView, {
  bookBrowsing: graphql`
    fragment BookBrowsingView_bookBrowsing on Query {
    sortedBooks: sorted_books(input:$input){
   ...BookView_Book
    }
    }
  `
});
  