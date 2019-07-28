/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
<<<<<<< HEAD
type PaymentCredentialsView_paymentCredentials$ref = any;
type ShippingAddressesView_shippingAddresses$ref = any;
export type ProfileView_user$ref = any;
export type ProfileView_user = {
    readonly email: any;
    readonly username: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly shippingAddresses: ReadonlyArray<{
        readonly id: string;
        readonly isDefault: boolean;
    }>;
    readonly " $fragmentRefs": ShippingAddressesView_shippingAddresses$ref & PaymentCredentialsView_paymentCredentials$ref;
=======
export type ProfileView_user$ref = any;
export type ProfileView_user = {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: any;
>>>>>>> b31991a0c884ea9053fd518bd475f45e69d26493
    readonly " $refType": ProfileView_user$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ProfileView_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
<<<<<<< HEAD
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
=======
>>>>>>> b31991a0c884ea9053fd518bd475f45e69d26493
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
<<<<<<< HEAD
      "kind": "LinkedField",
      "alias": "shippingAddresses",
      "name": "shipping_addresses",
      "storageKey": null,
      "args": null,
      "concreteType": "ShippingAddress",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": "isDefault",
          "name": "is_default",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ShippingAddressesView_shippingAddresses",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PaymentCredentialsView_paymentCredentials",
      "args": null
    }
  ]
};
(node as any).hash = 'b0a96d66743bde75da551d42ed0ea29f';
=======
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'ea306c13f922e425779a2d5438f492e4';
>>>>>>> b31991a0c884ea9053fd518bd475f45e69d26493
export default node;
