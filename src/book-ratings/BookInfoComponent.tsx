import React from 'react';
import bookCover from './Images/it.png';
import './BookInfoComponent.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

interface InfoProps
{

}
interface InfoStates
{
    author: string,
    userRating: number
}

export default class BookInfoComponent extends React.Component 
<InfoProps,InfoStates>
{
    state = 
    {
        author: 'Stephen King',
        userRating: 4 
    }

    calculateRating()
    {
        
    }
   
    //render function for rendering JSX
    render()
    {
        return(
            <div>

                <img src={bookCover} className="hvr-bob" /> 
                <div className="bookRating">
                    <Rater total = {5} rating={this.state.userRating } interactive={false}/>
                    <br></br>
                    This book has been rated a {this.state.userRating} / 5 
                </div>
                
            </div> )
    }

    //custom functions 
} 