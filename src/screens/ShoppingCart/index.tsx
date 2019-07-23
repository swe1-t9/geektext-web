import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';


import { environment } from '../../graphql/relay';
import BookDetailsView from './BookDetailsView';
import {BookDetailsQueryResponse} from './__generated__/BookDetailsQuery.graphql';

const BookDetailsQuery = graphql`
  query BookDetailsQuery ($input: BookDetailsInput!) {
      bookDetails: book_details (input: $input) {
        ...BookDetailsView_bookDetails
      }
  }
`;

const ShoppingCart: React.FC = () => (
  <QueryRenderer
    environment={environment}
    query={ShoppingCartQuery}
    variables={{input: {id: '00000000-0000-0000-0000-000000000001'}}}
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



export default ShoppingCart;
