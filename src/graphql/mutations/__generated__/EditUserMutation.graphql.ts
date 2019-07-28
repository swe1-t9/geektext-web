/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type EditUserInput = {
    readonly email: any;
    readonly first_name: string;
    readonly last_name: string;
<<<<<<< HEAD
    readonly selected_shipping_address_id: string;
    readonly username: string;
=======
>>>>>>> b31991a0c884ea9053fd518bd475f45e69d26493
};
export type EditUserMutationVariables = {
    readonly input: EditUserInput;
};
export type EditUserMutationResponse = {
    readonly editUser: {
        readonly firstName: string;
        readonly lastName: string;
        readonly email: any;
    };
};
export type EditUserMutation = {
    readonly response: EditUserMutationResponse;
    readonly variables: EditUserMutationVariables;
};



/*
mutation EditUserMutation(
  $input: EditUserInput!
) {
  editUser: edit_user(input: $input) {
    firstName: first_name
    lastName: last_name
    email
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EditUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": "firstName",
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": "lastName",
  "name": "last_name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "editUser",
        "name": "edit_user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "editUser",
        "name": "edit_user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditUserMutation",
    "id": null,
    "text": "mutation EditUserMutation(\n  $input: EditUserInput!\n) {\n  editUser: edit_user(input: $input) {\n    firstName: first_name\n    lastName: last_name\n    email\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f54c1974a6ffb112a06e6fe81350601c';
export default node;
