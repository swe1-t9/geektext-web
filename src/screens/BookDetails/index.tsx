import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as request from "request-promise-native";

const useStyles = makeStyles(
  createStyles({
    card: {
      marginTop: 10,
      marginLeft: 10,
      maxWidth: 325,
      background: '#000000',
    },
    media: {
      height: 198,
    },
  }),
);

async function loadData()  {
  const url = "http://localhost:3000/book-details";
  const queryString = '?book_id='+"1";
  var options = {
      uri: url + queryString,
  };

  const result = request.get(options)//.then(function(data) {});
  console.log(result);
  return result
}

type BookProps = {
  title: string,
  price: string
}

// export default function getBookCard(title: string, price: string) {
//   const classes = useStyles();

//   return(<Card className={classes.card}>
//   <CardActionArea>
//     <CardMedia
//       className={classes.media}
//       image="https://cdn.britannica.com/s:500x350/21/182021-004-532121B3.jpg"
//       title={title}
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="h2">
//         {title}
//       </Typography>
//       <Typography variant="body2" color="textSecondary" component="p">
//       To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.
//       </Typography>
//     </CardContent>
//   </CardActionArea>
//   <CardActions>
//     <Button size="small" color="primary">
//       Add To Cart
//     </Button>
//     <Button size="small" color="primary">
//       More
//     </Button>
//   </CardActions>
// </Card>)
// }

// var defaultBook = getBookCard("Harry Pooter", "$100")
// export default defaultBook;
// export const BookCard: FunctionComponent<BookProps> = ({ title, price }) => <
  

// export default function book() {

//   return(<BookCard title="Harry Pooter" price="$100" />)
// }

export default function MediaCard() {
    const classes = useStyles();

    
  loadData();

  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.britannica.com/s:500x350/21/182021-004-532121B3.jpg"
          title={"test"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            bookTitle
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.
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

//   class ABook extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         book_id: 1
//       }
//     }
//   }
  