import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { BookBrowsingView_bookBrowsing } from './__generated__/BookBrowsingView_bookBrowsing.graphql';
import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Button, Typography, CardActions, Grid, Theme, IconButton, Collapse, Link } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';

type Props = {
  bookBrowsing: BookBrowsingView_bookBrowsing;
};

const BookBrowsingView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  props.bookBrowsing.sortedBooks
  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return null
}
  


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
      paddingTop: '56.25%', // 16:9

    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    expandImage: {
      height: 700,
      width: 900
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);

export default createFragmentContainer(BookBrowsingView, {
  bookBrowsing: graphql`
    fragment BookBrowsingView_bookBrowsing on Query {
    sortedBooks: sorted_books(input:$input){
        title
    }
    }
  `
});
