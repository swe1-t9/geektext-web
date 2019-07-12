import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { LogInInput } from './__generated__/LogInMutation.graphql';

const mutation = graphql`
  mutation LogInMutation($input: LogInInput!) {
    logIn: log_in(input: $input)
  }
`;

function commit(
  input: LogInInput,
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
