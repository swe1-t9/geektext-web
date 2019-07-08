import React from 'react';
import bookCover from './Images/it.png';
import './BookInfoComponent.css';

interface InfoProps
{

}
interface InfoStates
{
    author: string
}

export default class BookInfoComponent extends React.Component 
<InfoProps,InfoStates>
{
    state = 
    {
        author: 'Stephen King'
    }
   
    //render function for rendering JSX
    render()
    {
        return(
            <div>
                <img src={bookCover} className="hvr-bob" /> 
                <div className="bar">
                    <div className="fill5">
                    </div>
                </div> 
            </div> )
    }

    //custom functions 
} 