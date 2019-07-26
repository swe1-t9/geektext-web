/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type SignUpInput = {
    readonly address_line_1: string;
    readonly address_line_2?: string | null;
    readonly address_line_3?: string | null;
    readonly city: string;
    readonly country: string;
    readonly email: any;
    readonly first_name: string;
    readonly last_name: string;
    readonly password: any;
    readonly postal_code: any;
    readonly region?: string | null;
    readonly username: string;
};
export type SignUpMutationVariables = {
    readonly input: SignUpInput;
};
export type SignUpMutationResponse = {
    readonly signUp: any;
};
export type SignUpMutation = {
    readonly response: SignUpMutationResponse;
    readonly variables: SignUpMutationVariables;
};



/*
mutation SignUpMutation(
  $input: SignUpInput!
) {
  signUp: sign_up(input: $input)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SignUpInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": "signUp",
    "name": "sign_up",
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignUpMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignUpMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignUpMutation",
    "id": null,
    "text": "mutation SignUpMutation(\n  $input: SignUpInput!\n) {\n  signUp: sign_up(input: $input)\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd4786224f1f063bf2168a9546574ae71';
export default node;
