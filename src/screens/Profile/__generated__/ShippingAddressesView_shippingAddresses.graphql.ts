/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ShippingAddressesView_shippingAddresses$ref = any;
export type ShippingAddressesView_shippingAddresses = {
    readonly shippingAddresses: ReadonlyArray<{
        readonly id: string;
        readonly city: string;
        readonly region: string | null;
        readonly country: string;
        readonly isDefault: boolean;
        readonly addressLine1: string;
        readonly addressLine2: string | null;
        readonly addressLine3: string | null;
        readonly postalCode: any;
    }>;
    readonly " $refType": ShippingAddressesView_shippingAddresses$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ShippingAddressesView_shippingAddresses",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
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
          "alias": "isDefault",
          "name": "is_default",
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
    }
  ]
};
(node as any).hash = 'cd5973981c06fb3a4c1bf45504d0c735';
export default node;
