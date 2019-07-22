import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { EditUserInput } from './__generated__/EditUserMutation.graphql';

const mutation = graphql`
  mutation EditUserMutation($input: EditUserInput!) {
    editUser: edit_user(input: $input) {
      firstName: first_name
      lastName: last_name
      email
    }
  }
`;

function commit(
  input: EditUserInput,
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
