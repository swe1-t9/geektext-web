import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { environment } from '../../graphql/relay';
import BookBrowsingView from './BookBrowsingView';
import {BookBrowsingQueryResponse} from './__generated__/BookBrowsingQuery.graphql';
import Menu from './Menu';


const BookBrowsingQuery = graphql`
  query BookBrowsingQuery ($input: SortedBooksInput!) {
    ...BookBrowsingView_bookBrowsing
    
  }
`;

const Catalog: React.FC = () => (
  <QueryRenderer
    environment={environment}
    query={BookBrowsingQuery}
    variables={{input: {"field_to_sort_by": "title", "sort_direction": "asc"}}}
    render={({ props, error }) => {
      if (error) return <div>{error.message}</div>;
      else if (props) {
        console.log(props);
        return (
         
          <BookBrowsingView bookBrowsing={(props as BookBrowsingQueryResponse)} />
        );
      } else return <div>loading</div>;
    }}
  />
);

export default Catalog;