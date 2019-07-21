import Anon from '@material-ui/icons/AccountCircle';
import React, {useState} from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Checkbox from '../Buttons/Checkbox';
import SubmitButton from '../Buttons/SubmitButton';
import CommentBox from '../Items/CommentBox';
import Avatar from '../Items/LetterAvatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NewComment from '../Items/PostedComment';
import Typography from '@material-ui/core/Typography';

const CommentComponent = (props:any) => {
	const classes = useStyles();

	//states
	const [nickname, setNickname] = 	React.useState("Vanessa");
	const [ava, setAva] = 				React.useState(<Anon />);

	const [userComment,setUserComment] = React.useState("This book was interesting");
	const [book_title,setTitle] = 		React.useState('It');
	const [userStars,setStars] =		React.useState(0);
	const [postRating, setPR] =			React.useState(false);
	const [datePosted, setDate] = 		React.useState("ERROR MESSAGE. SOMETHING WENT WRONG");
	const [newComment, setNewComment] =	React.useState(  );
	const [bookPurchased,setBookPurchased] = React.useState(true);
	const [alreadyRated, setAlreadyRated] = React.useState(false);
	const [anonChecked,setAnonCheck]  = React.useState(false);

	  /*
	const showAvatar = () => (event: React.ChangeEvent<HTMLInputElement>) => {
	{
		if(state.reaminAnonymous)
		{
			alert("Nickname to anon set");
			setNickname("Anonymous");
			setAva(<Anon/>);
		}
		else
		{
			alert("Using initials");
			setAva( <Avatar initial={nickname.charAt(0)}/> );
		}
	};*/


	/*User can only comment if the following conditions are true:
	 1. book has been purchased. 
	 2. they haven't already commented before.
	 */
	const commentingAllowed = () => (event: React.ChangeEvent<HTMLInputElement>) => {
		//fetch from database if book is purchased and has already been rated.
		if(bookPurchased && !alreadyRated) //post the rating 
		{
			/*get date of posting */
			var dateObj = new Date();
			var month = dateObj.getUTCMonth() + 1; //months from 1-12
			var day = dateObj.getUTCDate();
			var year = dateObj.getUTCFullYear();
			var formatdate = month + "/" + day + "/" + year;
			setDate(formatdate);

			alert(userComment);
			setNewComment(<NewComment icon={ava} 
				userName={nickname} 
				date = {datePosted} 
				ratingGiven = {userStars}
				comment={userComment}/>);
			//setUserComment(event.target.value);
		}
		else //do not post the rating and show alert
		{
			if(!bookPurchased)
				alert("You have not bought this book, so you can't leave a review");
			else
				alert("You have already rated this book!");
		}
	};


	return (
		<div>

		{/* stores the rating the user gives the current book*/}
		<div className={classes.starRating}><Rater total={5} 
		onRate={ ({rating}) => {setStars(rating)} } /></div>

		<div className={classes.label}>
			<Typography>Review "{book_title}"</Typography>
		</div> 

			<div className={classes.anonbox}>
				<Checkbox  />
			</div>

			<div className={classes.avatar}>{ava}</div>
			<div className={classes.commentbox}>
				<CommentBox  commentText={userComment}/> 
			</div>

			<div className={classes.post}><SubmitButton  onPress={commentingAllowed()} /></div>	
			
			<div className={classes.postedComments}>
				{newComment}
			</div>
			
		</div>
	)
};

/*positioning for all the smaller components*/
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    starRating: {
		marginTop: theme.spacing(15),
        marginLeft: theme.spacing(35),
	},
	label: {
		marginTop: theme.spacing(-10),
        marginLeft: theme.spacing(5),
	},
	post: {
		marginTop: theme.spacing(30),
        marginLeft: theme.spacing(60),
	},
	postedComments: {
		marginTop: theme.spacing(-90),
        marginLeft: theme.spacing(110),
	},
	anonbox: {
		marginTop: theme.spacing(80),
        marginLeft: theme.spacing(110),
	},
	avatar: {
		marginTop: theme.spacing(-60),
        marginLeft: theme.spacing(20),
	},
	commentbox: {
		marginTop: theme.spacing(-10),
		marginLeft: theme.spacing(35),
		width: 500,
	},
  }),
);

export default CommentComponent;