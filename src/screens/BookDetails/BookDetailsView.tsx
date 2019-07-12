import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { BookDetailsView_bookDetails } from './__generated__/BookDetailsView_bookDetails.graphql';
import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Button, Typography, CardActions, Grid, Theme, IconButton, Collapse } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';



type Props = {
  bookDetails: BookDetailsView_bookDetails;
};

const BookDetailsView: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

function handleExpandClick() {
  setExpanded(!expanded);
}
  return (
    // <div>{props.bookDetails.title}</div>
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
          <CardMedia
            className={classes.media}
            image="https://cdn.britannica.com/s:500x350/21/182021-004-532121B3.jpg"
            // className={classes.expandImage}
            // onClick={expandImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.bookDetails.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.bookDetails.title}
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
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
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
            <Typography paragraph>About the Author</Typography>
            <Typography paragraph>
              Author Description
          </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: 10,
      marginLeft: 10,
      maxWidth: 600,
      maxHeight: 600,
      background: '#000000'
    },
    media: {
      height: 400
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
    expandImage:{
      height: 700,
      width: 900
    }
  })
);

export default createFragmentContainer(BookDetailsView, {
  bookDetails: graphql`
    fragment BookDetailsView_bookDetails on Book {
      id
      author_id
      title
      isbn
      genre
      publish_year
      price
    }
  `
});
