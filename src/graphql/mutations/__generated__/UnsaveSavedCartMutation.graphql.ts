/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UnsaveSavedCartMutationVariables = {};
export type UnsaveSavedCartMutationResponse = {
    readonly unsaveSavedCart: {
        readonly id: string;
    };
};
export type UnsaveSavedCartMutation = {
    readonly response: UnsaveSavedCartMutationResponse;
    readonly variables: UnsaveSavedCartMutationVariables;
};



/*
mutation UnsaveSavedCartMutation {
  unsaveSavedCart: unsave_saved_cart {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": "unsaveSavedCart",
    "name": "unsave_saved_cart",
    "storageKey": null,
    "args": null,
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
    "name": "UnsaveSavedCartMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UnsaveSavedCartMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UnsaveSavedCartMutation",
    "id": null,
    "text": "mutation UnsaveSavedCartMutation {\n  unsaveSavedCart: unsave_saved_cart {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e14fee1a4fb94d4ee5077912a05e46dc';
export default node;
