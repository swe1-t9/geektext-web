import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';

const mutation = graphql`
  mutation CheckoutUserMutation {
    checkoutUser: checkout_user {
      items {
        book {
            title
        }
        amount
      }
    }
  }
`;

function commit(
  onSuccess: (response: any) => void,
  onFailure: (error: Error) => void
) {
  const variables = {};
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: onSuccess,
    onError: onFailure
  });
}

export { commit };