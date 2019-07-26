/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type ProfileView_user$ref = any;
export type ProfileQueryVariables = {};
export type ProfileQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": ProfileView_user$ref;
    };
};
export type ProfileQuery = {
    readonly response: ProfileQueryResponse;
    readonly variables: ProfileQueryVariables;
};



/*
query ProfileQuery {
  viewer {
    ...ProfileView_user
    id
  }
}

fragment ProfileView_user on User {
  email
  username
  firstName: first_name
  lastName: last_name
  shippingAddresses: shipping_addresses {
    id
    isDefault: is_default
  }
  ...ShippingAddressesView_shippingAddresses
  ...PaymentCredentialsView_paymentCredentials
}

fragment ShippingAddressesView_shippingAddresses on User {
  shippingAddresses: shipping_addresses {
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

fragment PaymentCredentialsView_paymentCredentials on User {
  paymentCredentials: payment_credentials {
    id
    lastFourDigits: last_four_digits
    cardAssociation: card_association
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProfileQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProfileView_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "firstName",
            "name": "first_name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "lastName",
            "name": "last_name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "shippingAddresses",
            "name": "shipping_addresses",
            "storageKey": null,
            "args": null,
            "concreteType": "ShippingAddress",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": "isDefault",
                "name": "is_default",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "city",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "region",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "country",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "addressLine1",
                "name": "address_line_1",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "addressLine2",
                "name": "address_line_2",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "addressLine3",
                "name": "address_line_3",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "postalCode",
                "name": "postal_code",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "paymentCredentials",
            "name": "payment_credentials",
            "storageKey": null,
            "args": null,
            "concreteType": "PaymentCredential",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": "lastFourDigits",
                "name": "last_four_digits",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "cardAssociation",
                "name": "card_association",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProfileQuery",
    "id": null,
    "text": "query ProfileQuery {\n  viewer {\n    ...ProfileView_user\n    id\n  }\n}\n\nfragment ProfileView_user on User {\n  email\n  username\n  firstName: first_name\n  lastName: last_name\n  shippingAddresses: shipping_addresses {\n    id\n    isDefault: is_default\n  }\n  ...ShippingAddressesView_shippingAddresses\n  ...PaymentCredentialsView_paymentCredentials\n}\n\nfragment ShippingAddressesView_shippingAddresses on User {\n  shippingAddresses: shipping_addresses {\n    id\n    city\n    region\n    country\n    isDefault: is_default\n    addressLine1: address_line_1\n    addressLine2: address_line_2\n    addressLine3: address_line_3\n    postalCode: postal_code\n  }\n}\n\nfragment PaymentCredentialsView_paymentCredentials on User {\n  paymentCredentials: payment_credentials {\n    id\n    lastFourDigits: last_four_digits\n    cardAssociation: card_association\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4b7e8ad111990dc7914e137d8b1dac5f';
export default node;
