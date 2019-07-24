/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AddToShoppingCartInput = {
    readonly amount: number;
    readonly book_id: string;
};
export type AddToShoppingCartMutationVariables = {
    readonly input: AddToShoppingCartInput;
};
export type AddToShoppingCartMutationResponse = {
    readonly addToShoppingCart: {
        readonly id: string;
    };
};
export type AddToShoppingCartMutation = {
    readonly response: AddToShoppingCartMutationResponse;
    readonly variables: AddToShoppingCartMutationVariables;
};



/*
mutation AddToShoppingCartMutation(
  $input: AddToShoppingCartInput!
) {
  addToShoppingCart: add_to_shopping_cart(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddToShoppingCartInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "addToShoppingCart",
    "name": "add_to_shopping_cart",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ShoppingCartItem",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "AddToShoppingCartMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddToShoppingCartMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddToShoppingCartMutation",
    "id": null,
    "text": "mutation AddToShoppingCartMutation(\n  $input: AddToShoppingCartInput!\n) {\n  addToShoppingCart: add_to_shopping_cart(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c0bb1e2f671f6bbfb3787752a3a8e80a';
export default node;
