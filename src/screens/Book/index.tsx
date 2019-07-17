import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Book = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.britannica.com/s:500x350/21/182021-004-532121B3.jpg"
          title="To Kill A Mockingbird"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            To Kill A Mockingbird
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            To Kill a Mockingbird is a novel by Harper Lee published in 1960.
            Instantly successful, widely read in high schools and middle schools
            in the United States, it has become a classic of modern American
            literature, winning the Pulitzer Prize.
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
      background: '#000000'
    },
    media: {
      height: 198
    }
  })
);

export default Book;
