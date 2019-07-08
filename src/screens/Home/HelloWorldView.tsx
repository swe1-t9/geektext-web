import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { HelloWorldView_helloWorld } from './__generated__/HelloWorldView_helloWorld.graphql';
import React from 'react';

type Props = {
  helloWorld: HelloWorldView_helloWorld;
};

const HelloWorldView: React.FC<Props> = (props: Props) => (
  <div>{props.helloWorld.helloWorld}</div>
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

export default createFragmentContainer(HelloWorldView, {
  helloWorld: graphql`
    fragment HelloWorldView_helloWorld on Query {
      helloWorld: hello_world
    }
  `
});
