import {
  createFragmentContainer,
  createRefetchContainer,
  Environment,
  RelayRefetchProp
} from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { BookBrowsingView_bookBrowsing } from './__generated__/BookBrowsingView_bookBrowsing.graphql';
import React from 'react';
import { Grid, Theme, MenuItem, Button, Menu } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import BookView from './BookView';

type Props = {
  bookBrowsing: BookBrowsingView_bookBrowsing;
  relay: RelayRefetchProp;
};

const BookBrowsingView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [sortByPrice, setSortByPrice] = React.useState(false);
  const [sortByAuthor, setSortByAuthor] = React.useState(false);
  const [sortByRating, setSortByRating] = React.useState(false);
  return (
    <div className={classes.root}>
      <MenuListComposition />
      <ContainedButtons />
      <Grid container spacing={1}>
        {props.bookBrowsing.sortedBooks
          .map(book => book)
          .sort((book1, book2) => {
            if (sortByAuthor) {
              return book1.author.firstName.localeCompare(
                book2.author.firstName
              );
            }
            return book1.title.localeCompare(book2.title);
          })
          .map(book => (
            <Grid direction="row">
              <BookView book={book} />
            </Grid>
          ))}
      </Grid>
    </div>
  );

  function MenuListComposition() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const classes = useStyles();

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      setAnchorEl(event.currentTarget);
    }

    function handleClose() {
      setAnchorEl(null);
    }

    return (
      <div>
        <Button
          aria-controls="simple-menu"
          size="medium"
          variant="contained"
          color="default"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.button}
        >
          Sort By:
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() =>
              props.relay.refetch({
                field_to_sort_by: 'title',
                sort_direction: 'asc'
              })
            }
          >
            Title
          </MenuItem>
          <MenuItem
            onClick={() =>
              props.relay.refetch(
                {
                  field_to_sort_by: 'price',
                  sort_direction: 'asc'
                },
                null,
                (error: Error | null | undefined) =>
                  !!error && console.warn(error)
              )
            }
          >
            Price
          </MenuItem>
          <MenuItem onClick={handleClose}>Rating</MenuItem>
          <MenuItem
            onClick={() =>
              props.relay.refetch({
                field_to_sort_by: 'publish_year',
                sort_direction: 'asc'
              })
            }
          >
            Date
          </MenuItem>
        </Menu>
      </div>
    );
  }
};

function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        style={{ display: 'flex' }}
      >
        Best Sellers
      </Button>
    </div>
  );
}

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

export default createRefetchContainer(
  BookBrowsingView,
  {
    bookBrowsing: graphql`
      fragment BookBrowsingView_bookBrowsing on Query {
        sortedBooks: sorted_books(input: $input) {
          title
          author {
            firstName: first_name
          }
          ...BookView_book
        }
      }
    `
  },
  graphql`
    query BookBrowsingViewQuery($input: SortedBooksInput!) {
      ...BookBrowsingView_bookBrowsing
    }
  `
);
