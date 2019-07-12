/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type LogInInput = {
    readonly email: any;
    readonly password: any;
};
export type LogInMutationVariables = {
    readonly input: LogInInput;
};
export type LogInMutationResponse = {
    readonly logIn: any;
};
export type LogInMutation = {
    readonly response: LogInMutationResponse;
    readonly variables: LogInMutationVariables;
};



/*
mutation LogInMutation(
  $input: LogInInput!
) {
  logIn: log_in(input: $input)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LogInInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": "logIn",
    "name": "log_in",
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
    "name": "LogInMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LogInMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LogInMutation",
    "id": null,
    "text": "mutation LogInMutation(\n  $input: LogInInput!\n) {\n  logIn: log_in(input: $input)\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '29885e48d29c9f664158814e5397c268';
export default node;
