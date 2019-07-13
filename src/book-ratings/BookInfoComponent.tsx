import React from 'react';
import bookCover from './Images/it.png';
import './BookInfoComponent.css';
import Bar from './Items/ProgressBar';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

interface InfoProps
{

}
interface InfoStates
{
    author: string,
    userRating: number,
    fivestar_total: number,
    fourstar_total: number,
    threestar_total: number,
    twostar_total: number,
    onestar_total: number
}

export default class BookInfoComponent extends React.Component 
<InfoProps,InfoStates>
{
    state = 
    {
        author: 'Stephen King',
        userRating: 4, //total of all ratings combined
        fivestar_total: 70,
        fourstar_total: 50,
        threestar_total: 50,
        twostar_total: 60,
        onestar_total: 80
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
                <div className="scoreboard"> 
                    <Bar rating= {this.state.fivestar_total} />
                    <Bar rating= {this.state.fourstar_total}/>
                    <Bar rating= {this.state.threestar_total}/>
                    <Bar rating= {this.state.twostar_total}/>
                    <Bar rating= {this.state.onestar_total}/>
                </div>
            </div> )
    }

    //custom functions 
} 