import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';


import { environment } from '../../graphql/relay';
import BookBrowsingView from './BookBrowsingView';
import {BookDetailsQueryResponse} from './__generated__/BookDetailsQuery.graphql';

const BookBrowsingQuery = graphql`
  query BookBrowsingQuery ($input: SortedBooksInput!) {
    ...BookBrowsingView_bookBrowsing
  }
`;

const Book: React.FC = () => (
  <QueryRenderer
    environment={environment}
    query={BookBrowsingQuery}
    variables={{input: {id: '00000000-0000-0000-0000-000000000001'}}}
    render={({ props, error }) => {
      if (error) return <div>{error.message}</div>;
      else if (props) {
        console.log(props);
        return (
          <BookBrowsingView bookDetails={(props as BookDetailsQueryResponse).bookDetails} />
        );
      } else return <div>loading</div>;
    }}
  />
);