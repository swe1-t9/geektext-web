import Anon from '@material-ui/icons/AccountCircle';
import React, {useState, Component} from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import SubmitButton from '../Buttons/SubmitButton';
import Avatar from '../Items/LetterAvatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Review from '../Items/Review';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import {CommentComponent_comments} from './__generated__/CommentComponent_comments.graphql'
import { commit as commitCreateReviewMutation } from '../../../graphql/mutations/CreateReviewMutation';

type Props = {
	comments: CommentComponent_comments;
  };

const CommentComponent:React.FC<Props> = (props) => {
	const classes = useStyles();

	//states
	const [nickname, setNickname] = 	React.useState("Vanessa");
	const [ava, setAva] = 				React.useState(<Avatar initial={nickname.charAt(0)}/>);
	const [userComment,setUserComment] = React.useState("");
	const [userStars,setStars] =		React.useState(0);
	const [commentTitle,setCommentTitle] = React.useState("title");
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

	  const onSuccess = () => window.location.reload();
	  const onFailure = () => console.warn('error');

	/*User can only comment if the following conditions are true:
	 1. book has been purchased. 
	 2. they haven't already commented before.
	 */
	const commentingAllowed = () => (event: React.ChangeEvent<HTMLInputElement>) => {
		//fetch from database if book is purchased and has already been rated.
		
		if(userComment.length >= min_words && userComment.length <= max_words) //check word amount of comment before posting
		{
			
			/*mutation to submit a rating*/
			commitCreateReviewMutation(
				{
					book_id: "00000000-0000-0000-0000-000000000001",
					title: commentTitle,
					body: userComment,
					is_anonymous: state.checkedA, 
					rating: userStars,
				},
				onSuccess,
				onFailure
			  );
			
		}
		else
		{
			let message = "Your comment must be more than " + min_words 
							+ " and less than " + max_words;
			alert(message);
		}
		
	};

	return (
		<div className={classes.yourComment}>
			<Grid container spacing={3}>
				<Grid item xs={4}>
					{ava}
				</Grid>
				<Grid item xs>
					{/*leave empty space for separating the initial and checkbox*/}
				</Grid>
				<Grid item xs={3}>
					{CheckBox()}
				</Grid>
			</Grid>

			<Grid container spacing={3}>
				<Grid item xs={12}>
				{/* stores the rating the user gives the current book*/}
				<Rater total={5} 
				onRate={ ({rating}) => {setStars(userStars)} } />
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
			{props.comments.reviews.map(review => <Review review={review} />) }
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

export default createFragmentContainer(CommentComponent, {
	comments: graphql`
	  fragment CommentComponent_comments on Book {
		reviews {
		  ...Review_review
		}
	  }
	`
  });