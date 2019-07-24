/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CheckoutUserMutationVariables = {};
export type CheckoutUserMutationResponse = {
    readonly checkoutUser: {
        readonly items: ReadonlyArray<{
            readonly book: {
                readonly title: string;
            };
            readonly amount: number;
        }>;
    };
};
export type CheckoutUserMutation = {
    readonly response: CheckoutUserMutationResponse;
    readonly variables: CheckoutUserMutationVariables;
};



/*
mutation CheckoutUserMutation {
  checkoutUser: checkout_user {
    items {
      book {
        title
        id
      }
      amount
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
},
v2 = {
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
    "name": "CheckoutUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "checkoutUser",
        "name": "checkout_user",
        "storageKey": null,
        "args": null,
        "concreteType": "ShoppingCart",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingCartItem",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "book",
                "storageKey": null,
                "args": null,
                "concreteType": "Book",
                "plural": false,
                "selections": [
                  (v0/*: any*/)
                ]
              },
              (v1/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CheckoutUserMutation",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "checkoutUser",
        "name": "checkout_user",
        "storageKey": null,
        "args": null,
        "concreteType": "ShoppingCart",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingCartItem",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "book",
                "storageKey": null,
                "args": null,
                "concreteType": "Book",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v2/*: any*/)
                ]
              },
              (v1/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CheckoutUserMutation",
    "id": null,
    "text": "mutation CheckoutUserMutation {\n  checkoutUser: checkout_user {\n    items {\n      book {\n        title\n        id\n      }\n      amount\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b257ce3d509690defc374f2fab4f7050';
export default node;
