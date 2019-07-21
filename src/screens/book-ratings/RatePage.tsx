/* Main Page for book rating
   THIS PAGE IS TO BE DELETED. just used for vanessa to test all components together.
   when caro adds components, this will all be deleted.
*/
import React from 'react';
import './RatePage.css';

import CommentBox from './Components/CommentComponent';
import BookInfo from './Components/BookInfoComponent';

interface myStates
{
    userName:string
};

export default class RatePage extends React.Component 
<any,myStates>
{
    constructor(props:any)
    {
        super(props);
    }
    //render function for rendering JSX
    render()
    {
        return(
            <div>
                <BookInfo />
                <CommentBox />
            </div> 
            )
    }

    //custom functions 
}

