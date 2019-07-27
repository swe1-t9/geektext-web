import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { AddToShoppingCartInput } from './__generated__/AddToShoppingCartMutation.graphql';

const mutation = graphql`
  mutation AddToShoppingCartMutation($input: AddToShoppingCartInput!) {
    addToShoppingCart: add_to_shopping_cart(input: $input) {
      id
    }
  }
`;

function commit(
  input: AddToShoppingCartInput,
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