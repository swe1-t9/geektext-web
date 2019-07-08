/* Main Page for book rating
   Will bring together all other components here
*/
import React from 'react';
import './RatePage.css';

import Home from '../screens/Home';
import Login from '../screens/Login';
import { withNavbar } from '../shared/Navbar/index';

import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        this.state = 
        {
            userName: "Vanessa"
        };
    }
    //render function for rendering JSX
    render()
    {
        return(
            <div className="topnav">
                <a className="active" href="#rate a book here!">Book Rating & Commenting</a>>
                <a>Hello {this.state.userName}! Review favorite books that you have purchased!</a>
            </div> )
    }

    //custom functions 
}

