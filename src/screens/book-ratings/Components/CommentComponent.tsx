import Anon from '@material-ui/icons/AccountCircle';
import React, {useState} from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import SubmitButton from '../Buttons/SubmitButton';
import Avatar from '../Items/LetterAvatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NewComment from '../Items/PostedComment';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const CommentComponent = (props:any) => {
	const classes = useStyles();

	//states
	const [nickname, setNickname] = 	React.useState("Vanessa");
	const [ava, setAva] = 				React.useState(<Avatar initial={nickname.charAt(0)}/>);
	const [userComment,setUserComment] = React.useState("");
	const [userStars,setStars] =		React.useState(0);
	const [postRating, setPR] =			React.useState(false);
	const [datePosted, setDate] = 		React.useState("");
	const [bookPurchased,setBookPurchased] = React.useState(true);
	const [alreadyRated, setAlreadyRated] = React.useState(false);
	const [anonChecked,setAnonCheck]  = React.useState(false);
	const [commentTitle,setCommentTitle] = React.useState("title");
	var allComments: Object[];
	allComments = [""];
	const [max_words] = 				React.useState(1000);
	const [min_words] = 				React.useState(10);
	const [wordcountError,setError] = 	React.useState(false);
	const [state, setState] = 			React.useState({checkedA: false,});

	/*The actual comment box where the user can write*/
	const CommentBox = () => {
		return (
		 
			<TextField
			  id="user comment"
			  error = {wordcountError}
			  label="What are your thoughts on this book?"
			  multiline 
			  rows="10"
			  defaultValue=" "
			  className={classes.textField}
			  margin="normal"
			  fullWidth
			  variant="filled"
			  onChange={event => setUserComment(event.target.value) }
			/>
		);
	  };

		/*The actual comment box where the user can write*/
		const TitleBox = () => {
			return (
			 
				<TextField
				  id="title_box"
				  label="Review Title"
				  multiline 
				  rows="1"
				  defaultValue=" "
				  className={classes.textField}
				  margin="normal"
				  fullWidth
				  onChange={event => setCommentTitle(event.target.value) }
				/>
			);
		  };

	  /*checkbox to remain anonymous or with nickname*/
	  const CheckBox = () => {
  
		/*when checkbox is clicked, change to anon. when unchecked, change to user*/
		const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
		  setState({ ...state, [name]: event.target.checked });
		  
		  if(state.checkedA)
		  {
			setNickname("Vanesa");
			setAva(<Avatar initial={nickname.charAt(0)}/>);
		  }
		  else
		  {
			setNickname("Anonymous");
			setAva(<Avatar initial={<Anon/>}/>);
		  }
		};
	  
		return ( 
			<FormControlLabel 
			  control={
				<Checkbox
				  checked={state.checkedA}
				  onChange={handleChange('checkedA')}
				  value="checkedA"
				  color="primary"
				/>
			  }
			  label={<Typography variant="body2">Remain Anonymous</Typography>}
			  
			/>
		);
	  };

	/*User can only comment if the following conditions are true:
	 1. book has been purchased. 
	 2. they haven't already commented before.
	 */
	const commentingAllowed = () => (event: React.ChangeEvent<HTMLInputElement>) => {
		//fetch from database if book is purchased and has already been rated.
		if(bookPurchased && !alreadyRated) 
		{
			if(userComment.length >= min_words && userComment.length <= max_words) //check word amount of comment before posting
			{
				/*get date of posting */
				var dateObj = new Date();
				var month = dateObj.getUTCMonth() + 1; //months from 1-12
				var day = dateObj.getUTCDate();
				var year = dateObj.getUTCFullYear();
				var formatdate = month + "/" + day + "/" + year;
				setDate(formatdate);
			
				/*add the new comment to the array*/
				allComments.push(<NewComment icon={ava}
					title={commentTitle} 
					userName={nickname} 
					date = {datePosted} 
					ratingGiven = {userStars}
					comment={userComment}/>);
					alert(allComments);
			}
			else
			{
				let message = "Your comment must be more than " + min_words 
								+ " and less than " + max_words;
				alert(message);
			}
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
		<div className={classes.yourComment}>
			<Grid container spacing={3}>
				<Grid item xs>
					{/* stores the rating the user gives the current book*/}
					<Rater total={5} 
						   onRate={ ({rating}) => {setStars(rating)} } />
				</Grid>
				<Grid item xs={4}>
					{ava}
				</Grid>
				<Grid item xs={3}>
					{CheckBox()}
				</Grid>
			</Grid>

			<Grid container spacing={3}>
				<Grid item xs={12}>
					{TitleBox()}
					{CommentBox()}
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={12} alignItems="center">
					<SubmitButton  onPress={commentingAllowed()} />
				</Grid>
			</Grid>

			<Grid container spacing={3}>
			<Grid item xs={12}>
				{allComments} {/*array not displaying */}
			</Grid>
		</Grid>
    	</div>
	)
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    yourComment: {
		marginTop: theme.spacing(15), //positions top for entire component
        marginLeft: '9%',
		width: 375,
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	  },
	  textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	  },
	  dense: {
		marginTop: theme.spacing(2),
	  },
	  menu: {
		width: 200,
	  },
  }),
);

export default CommentComponent;