import React from 'react';
import './StarRateComponent.css';

interface myStates 
{
  ratingSubmitted: boolean,
  star:             any
}

export default class StarRateComponent extends React.Component
<any,myStates>
{
    constructor(props:any)
    {
      super(props);
      this.state = 
      {
        ratingSubmitted: false,
        star: "gold"
      };
    }

    selectedStar(star:string)
    {
      var golden = document.getElementById(star);

      if(golden != null)
		  {
        golden.style.backgroundColor = this.state.star;
		  }
    }

    //render function for rendering JSX
    render()
    {
        return(
            <div>
              <label className= "star1" onClick={this.selectedStar.bind(this,"star1")}>★</label>
              <label className= "star2" onClick={this.selectedStar.bind(this,"star2")}>★</label>
              <label className= "star3" onClick={this.selectedStar.bind(this,"star3")}>★</label>
              <label className= "star4" onClick={this.selectedStar.bind(this,"star4")}>★</label>
              <label className= "star5" onClick={this.selectedStar.bind(this,"star5")}>★</label>
            </div> );
    } //render end brace
} //class end brace

