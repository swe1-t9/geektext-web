import { commitMutation } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from '../relay';
import { SetDefaultShippingAddressInput } from './__generated__/SetDefaultShippingAddressMutation.graphql';

const mutation = graphql`
  mutation SetDefaultShippingAddressMutation(
    $input: SetDefaultShippingAddressInput!
  ) {
    setDefaultShippingAddress: set_default_shipping_address(input: $input) {
      id
      city
      region
      country
      isDefault: is_default
      addressLine1: address_line_1
      addressLine2: address_line_2
      addressLine3: address_line_3
      postalCode: postal_code
    }
  }
`;

function commit(
  input: SetDefaultShippingAddressInput,
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
