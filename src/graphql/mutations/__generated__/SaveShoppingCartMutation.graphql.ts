/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type SaveShoppingCartMutationVariables = {};
export type SaveShoppingCartMutationResponse = {
    readonly saveShoppingCart: {
        readonly id: string;
    };
};
export type SaveShoppingCartMutation = {
    readonly response: SaveShoppingCartMutationResponse;
    readonly variables: SaveShoppingCartMutationVariables;
};



/*
mutation SaveShoppingCartMutation {
  saveShoppingCart: save_shopping_cart {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": "saveShoppingCart",
    "name": "save_shopping_cart",
    "storageKey": null,
    "args": null,
    "concreteType": "SavedCart",
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
    "name": "SaveShoppingCartMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SaveShoppingCartMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SaveShoppingCartMutation",
    "id": null,
    "text": "mutation SaveShoppingCartMutation {\n  saveShoppingCart: save_shopping_cart {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7564451d006cc57d50fe7838087bd874';
export default node;
