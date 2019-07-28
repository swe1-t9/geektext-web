import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { RemovePaymentCredentialInput } from './__generated__/RemovePaymentCredentialMutation.graphql';

const mutation = graphql`
  mutation RemovePaymentCredentialMutation(
    $input: RemovePaymentCredentialInput!
  ) {
    removePaymentCredential: remove_payment_credential(input: $input) {
      id
    }
  }
`;

function commit(
  input: RemovePaymentCredentialInput,
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
