import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';

import { environment } from '../../graphql/relay';
import ShoppingCartView from './ShoppingCartView';
import { ShoppingCartQueryResponse } from './__generated__/ShoppingCartQuery.graphql';
import Loading from '../../shared/Loading';

const ShoppingCartQuery = graphql`
  query ShoppingCartQuery {
    viewer {
      ...ShoppingCartView_user
    }
  }
`;

const ShoppingCart: React.FC = () => (
  <QueryRenderer
    environment={environment}
    query={ShoppingCartQuery}
    variables={{}}
    render={({ props, error }) => {
      if (error) return <div>{error.message}</div>;
      else if (props) {
        return <ShoppingCartView user={(props as ShoppingCartQueryResponse).viewer} />;
      } else return <Loading />;
    }}
  />
);

export default ShoppingCart;
