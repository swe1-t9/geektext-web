
import React from 'react';
import RatePage from './book-ratings/RatePage';
import CommentBox from './book-ratings/CommentComponent';
import BookInfo from './book-ratings/BookInfoComponent';

const App: React.FC = () => (
  <> 
    <RatePage />  
    <BookInfo />
    <CommentBox />
  </>
);



export default App;
