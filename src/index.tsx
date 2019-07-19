import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import RatePage from './screens/book-ratings/RatePage'; //to be deleted after merged with book details

/*To test Vanessa's rate page, until it is already merged with 
Book details, replace <App /> with <RatePage /> */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
