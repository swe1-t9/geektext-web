/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type RemoveFromSavedCartInput = {
    readonly item_id: string;
};
export type RemoveFromSavedCartMutationVariables = {
    readonly input: RemoveFromSavedCartInput;
};
export type RemoveFromSavedCartMutationResponse = {
    readonly removeFromSavedCart: {
        readonly id: string;
    };
};
export type RemoveFromSavedCartMutation = {
    readonly response: RemoveFromSavedCartMutationResponse;
    readonly variables: RemoveFromSavedCartMutationVariables;
};



/*
mutation RemoveFromSavedCartMutation(
  $input: RemoveFromSavedCartInput!
) {
  removeFromSavedCart: remove_from_saved_cart(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveFromSavedCartInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "removeFromSavedCart",
    "name": "remove_from_saved_cart",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
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
    "name": "RemoveFromSavedCartMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveFromSavedCartMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemoveFromSavedCartMutation",
    "id": null,
    "text": "mutation RemoveFromSavedCartMutation(\n  $input: RemoveFromSavedCartInput!\n) {\n  removeFromSavedCart: remove_from_saved_cart(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9bb1d747b802e696d4ddd9718d38ad07';
export default node;
