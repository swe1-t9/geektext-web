import Anon from '@material-ui/icons/AccountCircle';
import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Checkbox from './Buttons/Checkbox';
import SubmitButton from './Buttons/SubmitButton';
import './CommentComponent.css';
import CommentBox from './Items/CommentBox';
import Avatar from './Items/LetterAvatar';
import UserComment from './Items/UserComment';

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
	hasPurchased:		boolean,
	reaminAnonymous:	boolean
	commentboxDisabled: boolean,
	nickname:			string,
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
		   hasPurchased: false,
		   commentboxDisabled: false,
		   reaminAnonymous: true,
		   nickname:		"Vanessa",
		};
	}

	/*Submit button for comment and star rating have been clicked.
	  Add the following to the database: 
			  -Nickname OR Anonymous
			  -Comment 
			  -Star rating given (numeric) out of 5  */
	rating_posted()
	{
		
	}

	showAnonIcon()
	{
		/*default anon icon is hidden. keep track by keeping track of clicking pattern 
		if the counter is an even number, switch to visible
		if counter is odd, switch to hidden*/
		var icon = document.getElementById("anon");
/* 
		if(icon != null)
		{
			if( this.state.clicks % 2 == 0) /*user wants to show nickname on rating. hide icon
			{
				icon.style.visibility = "visible";
				this.setState({ reaminAnonymous: false });
			}
			else/*user wants to be anonymous. show anon icon
			{
				icon.style.visibility = "hidden";	
				this.setState({ reaminAnonymous: true });
			}
		} */
		this.setState({ clicks: this.state.clicks + 1 }); 
	}

	
//<Avatar initial='V' />
	render() 
	{
		var ava = <Anon />;
		if(this.state.reaminAnonymous)
		{
			ava = <Anon />;
		//	this.setState({ nickname: "Anonymous" });
		}
		else
		{
			ava = <Avatar initial={ this.state.nickname.charAt(0) }/>;
		}

		return (
			<div>
			
			<div className="starRating"><Rater total={5} /></div>

			<label className="label">
				Review "{this.state.book_title}"
			</label> 

				<div className="checkbox_title"><Checkbox /></div>
				<div className="avatar">{ava}</div>
				<div className="commentArea">
					<CommentBox disabled={this.state.commentboxDisabled}/>
				</div>
	
				<div className="post"><SubmitButton submit=""/></div>	
				
				<div className="commentColumn">
					<UserComment icon={ava} 
								 userName={this.state.nickname} 
								 date = "July 17, 2018" 
								 comment="I really loved this book!!"/>
					<UserComment icon={ava}/>
					<UserComment icon={ava}/>
				</div>
				
			</div>
		)
	}
} 

