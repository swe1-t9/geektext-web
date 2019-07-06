import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { SignUpInput } from './__generated__/SignUpMutation.graphql';

const mutation = graphql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp: sign_up(input: $input)
  }
`;

function commit(
  input: SignUpInput,
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
