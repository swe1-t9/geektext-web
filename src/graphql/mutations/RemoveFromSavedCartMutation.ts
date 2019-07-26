import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { RemoveFromSavedCartInput } from './__generated__/RemoveFromSavedCartMutation.graphql';

const mutation = graphql`
  mutation RemoveFromSavedCartMutation($input: RemoveFromSavedCartInput!) {
    removeFromSavedCart: remove_from_saved_cart(input: $input) {
      id
    }
  }
`;

function commit(
  input: RemoveFromSavedCartInput,
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