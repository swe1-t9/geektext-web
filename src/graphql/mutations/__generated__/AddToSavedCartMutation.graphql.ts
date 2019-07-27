/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AddToSavedCartInput = {
    readonly amount: number;
    readonly book_id: string;
};
export type AddToSavedCartMutationVariables = {
    readonly input: AddToSavedCartInput;
};
export type AddToSavedCartMutationResponse = {
    readonly addToSavedCart: {
        readonly id: string;
    };
};
export type AddToSavedCartMutation = {
    readonly response: AddToSavedCartMutationResponse;
    readonly variables: AddToSavedCartMutationVariables;
};



/*
mutation AddToSavedCartMutation(
  $input: AddToSavedCartInput!
) {
  addToSavedCart: add_to_saved_cart(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddToSavedCartInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "addToSavedCart",
    "name": "add_to_saved_cart",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SavedCartItem",
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
    "name": "AddToSavedCartMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddToSavedCartMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddToSavedCartMutation",
    "id": null,
    "text": "mutation AddToSavedCartMutation(\n  $input: AddToSavedCartInput!\n) {\n  addToSavedCart: add_to_saved_cart(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '474fe6231ce07b16431c3f5e1baddb6e';
export default node;
