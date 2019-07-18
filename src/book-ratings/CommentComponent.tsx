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
	ava:				any
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
		   reaminAnonymous: false,
		   nickname:		"Vanessa",
		   ava:				<Anon />,
		};
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

	showAvatar(ava: any)
	{
		if(this.state.reaminAnonymous)
		{
			this.setState({ nickname: "Anonymous" });
			ava = <Anon />;
		}
		else
		{
			ava = <Avatar initial={ this.state.nickname.charAt(0) }/>;
		}
	}

	render() 
	{
		return (
			<div>
			
			<div className="starRating"><Rater total={5} /></div>

			<label className="label">
				Review "{this.state.book_title}"
			</label> 

				<div className="checkbox_title"><Checkbox onChange={this.showAvatar.bind(this,this.state.ava)}/></div>
				<div className="avatar">{this.state.ava}</div>
				<div className="commentArea">
					<CommentBox disabled={this.state.commentboxDisabled}/>
				</div>
	
				<div className="post"><SubmitButton submit=""/></div>	
				
				<div className="commentColumn">
					<UserComment icon={this.state.ava} 
								userName={this.state.nickname} 
								date = "July 17, 2018" 
								ratingGiven = {3}
								comment="How many pages is 500 words? The answer is one page single spaced or two pages double spaced. Now, depending on how you've setup your document your page count may vary slightly, but with Arial or Times New Roman 12 point font and conventional margins you should see similar results. 500 word essays are very common throughout middle and high school English curriculums, especially as book reports, or summaries of current events. You can easily check page count in word processors like Microsoft Word and Google Docs, but for a quick reference use our table below.

								Answer: 500 words is 1 page single spaced or 2 pages double spaced."/>
					<UserComment icon={<Avatar initial="S"/>}/>
					<UserComment icon={<Avatar initial="V"/>}/>
				</div>
				
			</div>
		)
	}
} 

