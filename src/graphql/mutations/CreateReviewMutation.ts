import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { CreateReviewInput } from './__generated__/CreateReviewMutation.graphql';

const mutation = graphql`
mutation CreateReviewMutation($input: CreateReviewInput!) {
	create_review (input: $input) {
    id
    reviewer {
      id
      first_name
    }
    book {
      id
      title
    }
    title
    body
    rating
    is_anonymous
  }
}
`;

function commit(
  input: CreateReviewInput,
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
