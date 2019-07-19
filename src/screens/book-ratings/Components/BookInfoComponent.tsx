import React from 'react';
import bookCover from '../Images/it.png';
import './BookInfoComponent.css';
import Bar from '../Items/ProgressBar';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Typography from '@material-ui/core/Typography';

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
        onestar_total: 80,
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
                    <Bar rating= {this.state.fivestar_total} star = {5} />
                    <Bar rating= {this.state.fourstar_total} star = {4} />
                    <Bar rating= {this.state.threestar_total} star = {3} />
                    <Bar rating= {this.state.twostar_total} star={2} />
                    <Bar rating= {this.state.onestar_total} star={1}/>
                </div>
                
                <div className="rateLabels">
                    <Typography variant="body2" color="textSecondary" component="p">
                        5 Stars <p></p>
                        4 Stars <p></p>
                        3 Stars <p></p>
                        2 Stars <p></p>
                        1 Stars
                    </Typography>
                </div>
            </div> )
    }

    //custom functions 
} 