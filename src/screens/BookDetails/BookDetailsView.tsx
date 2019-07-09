import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { BookDetailsView_bookDetails } from './__generated__/BookDetailsView_bookDetails.graphql';
import React from 'react';

type Props = {
  bookDetails: BookDetailsView_bookDetails;
};

const BookDetailsView: React.FC<Props> = (props: Props) => (
  <div>{props.bookDetails.title}</div>

  // TODO: in BookDetailsView after everything else is generated for grpahql, this is last step
  // <Card className={classes.card}>
  //     <CardActionArea>
  //       <CardMedia
  //         className={classes.media}
  //         image="https://cdn.britannica.com/s:500x350/21/182021-004-532121B3.jpg"
  //         title={{props.bookDetails.title}}
  //       />
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="h2">
  //           bookTitle
  //         </Typography>
  //         <Typography variant="body2" color="textSecondary" component="p">
  //         To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //     <CardActions>
  //       <Button size="small" color="primary">
  //         Add To Cart
  //       </Button>
  //       <Button size="small" color="primary">
  //         More
  //       </Button>
  //     </CardActions>
  //   </Card>
);

export default createFragmentContainer(BookDetailsView, {
  bookDetails: graphql`
    fragment BookDetailsView_bookDetails on Book {
      author_id
      title
    }
  `
});
