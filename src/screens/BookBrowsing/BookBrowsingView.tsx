import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { BookBrowsingView_bookBrowsing } from './__generated__/BookBrowsingView_bookBrowsing.graphql';
import React from 'react';
import { Grid, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import BookView from './BookView';

type Props = {
  bookBrowsing: BookBrowsingView_bookBrowsing;
};

const BookBrowsingView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment >
        {props.bookBrowsing.sortedBooks.map(book => (
          <Grid direction= "row">
            <BookView book={book} />
          </Grid>
        ))}
        <Grid item xs={4}>
          <Paper className={classes.paper} />
        </Grid>
     
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
   
          <FormRow />
        </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    control: {
      padding: theme.spacing(2),
      horizontalAlign: 'center'
    }
  })
);

export default createFragmentContainer(BookBrowsingView, {
  bookBrowsing: graphql`
    fragment BookBrowsingView_bookBrowsing on Query {
      sortedBooks: sorted_books(input: $input) {
        ...BookView_book
      }
    }
  `
});
