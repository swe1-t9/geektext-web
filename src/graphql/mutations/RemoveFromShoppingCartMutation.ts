import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { RemoveFromShoppingCartInput } from './__generated__/RemoveFromShoppingCartMutation.graphql';

const mutation = graphql`
  mutation RemoveFromShoppingCartMutation($input: RemoveFromShoppingCartInput!) {
    removeFromShoppingCart: remove_from_shopping_cart(input: $input) {
      id
    }
  }
`;

function commit(
  input: RemoveFromShoppingCartInput,
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void
) {
  const variables = {
    input
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure
  });
}

export { commit };