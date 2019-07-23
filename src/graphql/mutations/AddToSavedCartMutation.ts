import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { AddToSavedCartInput } from './__generated__/AddToSavedCartMutation.graphql';

const mutation = graphql`
  mutation AddToSavedCartMutation($input: AddToSavedCartInput!) {
    addToSavedCart: add_to_saved_cart(input: $input) {
      id
    }
  }
`;

function commit(
  input: AddToSavedCartInput,
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