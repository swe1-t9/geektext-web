/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type RemoveFromShoppingCartInput = {
    readonly item_id: string;
};
export type RemoveFromShoppingCartMutationVariables = {
    readonly input: RemoveFromShoppingCartInput;
};
export type RemoveFromShoppingCartMutationResponse = {
    readonly removeFromShoppingCart: {
        readonly id: string;
    };
};
export type RemoveFromShoppingCartMutation = {
    readonly response: RemoveFromShoppingCartMutationResponse;
    readonly variables: RemoveFromShoppingCartMutationVariables;
};



/*
mutation RemoveFromShoppingCartMutation(
  $input: RemoveFromShoppingCartInput!
) {
  removeFromShoppingCart: remove_from_shopping_cart(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveFromShoppingCartInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "removeFromShoppingCart",
    "name": "remove_from_shopping_cart",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ShoppingCart",
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
    "name": "RemoveFromShoppingCartMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveFromShoppingCartMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveFromShoppingCartMutation",
    "id": null,
    "text": "mutation RemoveFromShoppingCartMutation(\n  $input: RemoveFromShoppingCartInput!\n) {\n  removeFromShoppingCart: remove_from_shopping_cart(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a9b121708f01230a640a474440c69d52';
export default node;
