import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { AddPaymentCredentialInput } from './__generated__/AddPaymentCredentialMutation.graphql';

const mutation = graphql`
  mutation AddPaymentCredentialMutation($input: AddPaymentCredentialInput!) {
    addPaymentCredential: add_payment_credential(input: $input) {
      id
    }
  }
`;

function commit(
  input: AddPaymentCredentialInput,
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
