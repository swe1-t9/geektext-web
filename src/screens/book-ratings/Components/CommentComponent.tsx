import Anon from '@material-ui/icons/AccountCircle';
import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Checkbox from '../Buttons/Checkbox';
import SubmitButton from '../Buttons/SubmitButton';
import './CommentComponent.css';
import CommentBox from '../Items/CommentBox';
import Avatar from '../Items/LetterAvatar';
import UserComment from '../Items/UserComment';



interface CommentProps
{

}
interface CommentStates
{
	max_words:			number,
	min_words: 			number,
	book_title: 		string,
	submit_pressed: 	boolean,
	placeholder_title: 	string,
	submitbutton_title: string,
	hasPurchased:		boolean,
	reaminAnonymous:	boolean
	commentboxDisabled: boolean,
	nickname:			string,
	ava:				any,
	postRatingClicked:  boolean,
	newComment:			any,
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
		   submit_pressed: false,
		   placeholder_title: "What do you think about this book?",
		   submitbutton_title: "Post Rating & Review",
		   hasPurchased: false,
		   commentboxDisabled: false,
		   reaminAnonymous: false,
		   nickname:		"Vanessa",
		   ava:				<Anon />,
		   postRatingClicked: false,
		   newComment:		  null,
		};
	}

	showAvatar()
	{
		if(this.state.reaminAnonymous)
		{
			this.setState({ nickname: "Anonymous" });
			this.setState( {ava: <Anon/> } );
		}
		else
		{
			this.setState( { ava: <Avatar initial={ this.state.nickname.charAt(0) }/>} );
		}
	}

	/*what happens when user clicks to submit rating FIXME. NOT WORKING*/
	handleEvent()
	{
		alert("Rating was submitted. (nothing actually happened)");
		this.setState({ postRatingClicked: true });
		const comment =	<UserComment icon={<Avatar initial="S"/>}/>
	}

	addComment()
	{
		if(this.state.postRatingClicked)
		{
			this.setState( { newComment: <UserComment icon={<Avatar initial="S"/>}/> } );
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

				<div className="checkbox_title"><Checkbox onChange={this.showAvatar.bind(this)}/></div>
				<div className="avatar">{this.state.ava}</div>
				<div className="commentArea">
					<CommentBox disabled={this.state.commentboxDisabled}/>
				</div>
	
				<div className="post"><SubmitButton onPress={this.handleEvent.bind(this)} /></div>	
				
				<div className="commentColumn">
					<UserComment icon={this.state.ava} 
								userName={this.state.nickname} 
								date = "July 17, 2018" 
								ratingGiven = {3}
								comment="How many pages is 500 words? The answer is one page single spaced or two pages double spaced. Now, depending on how you've setup your document your page count may vary slightly, but with Arial or Times New Roman 12 point font and conventional margins you should see similar results. 500 word essays are very common throughout middle and high school English curriculums, especially as book reports, or summaries of current events. You can easily check page count in word processors like Microsoft Word and Google Docs, but for a quick reference use our table below.

								Answer: 500 words is 1 page single spaced or 2 pages double spaced."/>
				</div>
				
			</div>
		)
	}
} 

