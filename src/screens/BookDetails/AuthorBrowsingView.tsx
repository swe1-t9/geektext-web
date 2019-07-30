import {
  createFragmentContainer,
  createRefetchContainer,
  Environment,
  RelayRefetchProp
} from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { Grid, Theme, MenuItem, Button, Menu } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import BookView from '../BookBrowsing/BookView';
import { AuthorBrowsingView_authorBrowsing } from './__generated__/AuthorBrowsingView_authorBrowsing.graphql';

type Props = {
  authorId: string;
  authorBrowsing: AuthorBrowsingView_authorBrowsing;
};

const AuthorBrowsingView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [sortByPrice, setSortByPrice] = React.useState(false);
  const [sortByAuthor, setSortByAuthor] = React.useState(false);
  const [sortByRating, setSortByRating] = React.useState(false);
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {props.authorBrowsing.sortedBooks
          .filter(book => book.author.id === props.authorId)
          .map(book => (
            <Grid direction="row">
              <BookView book={book} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(2)
    },
    control: {
      padding: theme.spacing(2),
      horizontalAlign: 'center'
    },
    button: {
      margin: theme.spacing(1),
      position: 'relative',
      flexDirection: 'row',
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexWrap: 'nowrap'
    }
  })
);

export default createFragmentContainer(AuthorBrowsingView, {
  authorBrowsing: graphql`
    fragment AuthorBrowsingView_authorBrowsing on Query {
      sortedBooks: sorted_books(input: $input) {
        author {
          id
        }
        ...BookView_book
      }
    }
  `
});
