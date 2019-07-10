import React from 'react';
import './CommentComponent.css';
import anon from './Images/anon.png';
import SubmitButton from './Buttons/SubmitButton';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


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
	clicks:				number,
	hasPurchased:		boolean
};



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
		   clicks: 0,
		   hasPurchased: false
		};
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
			    <Rater total={5} rating={0}/>
				
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
				<SubmitButton />				
			</form>
			</div>
		)
	}
} 

