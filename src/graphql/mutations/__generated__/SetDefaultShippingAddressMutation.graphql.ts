/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type SetDefaultShippingAddressInput = {
    readonly address_id: string;
};
export type SetDefaultShippingAddressMutationVariables = {
    readonly input: SetDefaultShippingAddressInput;
};
export type SetDefaultShippingAddressMutationResponse = {
    readonly setDefaultShippingAddress: {
        readonly id: string;
        readonly city: string;
        readonly region: string | null;
        readonly country: string;
        readonly isDefault: boolean;
        readonly addressLine1: string;
        readonly addressLine2: string | null;
        readonly addressLine3: string | null;
        readonly postalCode: any;
    };
};
export type SetDefaultShippingAddressMutation = {
    readonly response: SetDefaultShippingAddressMutationResponse;
    readonly variables: SetDefaultShippingAddressMutationVariables;
};



/*
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SetDefaultShippingAddressInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "setDefaultShippingAddress",
    "name": "set_default_shipping_address",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ShippingAddress",
    "plural": false,
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SetDefaultShippingAddressMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SetDefaultShippingAddressMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SetDefaultShippingAddressMutation",
    "id": null,
    "text": "mutation SetDefaultShippingAddressMutation(\n  $input: SetDefaultShippingAddressInput!\n) {\n  setDefaultShippingAddress: set_default_shipping_address(input: $input) {\n    id\n    city\n    region\n    country\n    isDefault: is_default\n    addressLine1: address_line_1\n    addressLine2: address_line_2\n    addressLine3: address_line_3\n    postalCode: postal_code\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '72dd4135ae78ac8ffab550a763e5f470';
export default node;
