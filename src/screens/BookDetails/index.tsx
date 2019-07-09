import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';

import { environment } from '../../graphql/relay';
import BookDetailsView from './BookDetailsView';
import { BookDetailsView_bookDetails$ref } from './__generated__/BookDetailsView_bookDetails.graphql';
import {BookDetailsQueryResponse} from './__generated__/BookDetailsQuery.graphql';

const BookDetailsQuery = graphql`
  query BookDetailsQuery ($input: BookDetailsInput!) {
      bookDetails: book_details (input: $input) {
        ...BookDetailsView_bookDetails
      }
  }
`;

const Book: React.FC = () => (
  <QueryRenderer
    environment={environment}
    query={BookDetailsQuery}
    variables={{input: {id: '1'}}}
    render={({ props, error }) => {
      if (error) return <div>{error.message}</div>;
      else if (props) {
        console.log(props);
        return (
          <BookDetailsView bookDetails={(props as BookDetailsQueryResponse).bookDetails} />
        );
      } else return <div>loading</div>;
    }}
  />
);

export default Book;
