import React from 'react';
import './CommentComponent.css';
import Stars from './StarRateComponent';
import anon from './Images/anon.png';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface CommentProps
{

}
interface CommentStates
{
	max_words:			number,
	min_words: 			number,
	book_title: 		string,
	commentbox_rows: 	number,
	commentbox_cols: 	number,
	submit_pressed: 	boolean,
	placeholder_title: 	string,
	submitbutton_title: string,
	clicks:				number
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    leftIcon: {
      marginRight: theme.spacing(1),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    iconSmall: {
      fontSize: 20,
    },
  }),
);

export default class CommentComponent extends React.Component 
<CommentProps,CommentStates>
{
	constructor (props:any) 
	{
		super(props)
		this.state = 
		{
		   max_words: 500,
		   min_words: 10,
		   book_title: 'It',
		   commentbox_rows: 20,
		   commentbox_cols: 500,
		   submit_pressed: false,
		   placeholder_title: "What do you think about this book?",
		   submitbutton_title: "Post Rating & Review",
		   clicks: 0
		};
	//	const classes = useStyles();
	}

	rating_posted()
	{
		
	}

	showAnonIcon()
	{
		/*default anon icon is hidden. keep track by keeping track of clicking pattern 
		if the counter is an even number, switch to visible
		if counter is odd, switch to hidden*/
		var icon = document.getElementById("anon");

		if(icon != null)
		{
			if( this.state.clicks % 2 == 0) /*user wants to show nickname on rating. hide icon*/
			{
				icon.style.visibility = "visible";
			}
			else/*user wants to be anonymous. show anon icon*/
			{
				icon.style.visibility = "hidden";	
			}
		}
		this.setState({ clicks: this.state.clicks + 1 });
	}


	render() 
	{
		return (
			<div>
			<form action="#Home">
				<Stars ratingSubmited="false" />
				<label className="label">
					Review "{this.state.book_title}"
				</label> 
				<input type="checkbox" onClick={this.showAnonIcon.bind(this)} />
				<label className="checkbox_title">Remain Anonymous</label>
				<img id="anon" className="anon" src={anon} />
				<textarea id="text" 
									maxLength={this.state.max_words} 
								    minLength={this.state.min_words} 
								    rows={this.state.commentbox_rows}
								    cols={this.state.commentbox_cols}
								    placeholder={this.state.placeholder_title} />
				<input type="submit" className="hvr-float-shadow" 
									 value={this.state.submitbutton_title}
									 onClick={this.rating_posted.bind(this)}  />
				
			</form>
			</div>
		)
	}
} 

