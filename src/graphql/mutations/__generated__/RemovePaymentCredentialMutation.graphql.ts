/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type RemovePaymentCredentialInput = {
    readonly payment_credential_id: string;
};
export type RemovePaymentCredentialMutationVariables = {
    readonly input: RemovePaymentCredentialInput;
};
export type RemovePaymentCredentialMutationResponse = {
    readonly removePaymentCredential: {
        readonly id: string;
    };
};
export type RemovePaymentCredentialMutation = {
    readonly response: RemovePaymentCredentialMutationResponse;
    readonly variables: RemovePaymentCredentialMutationVariables;
};



/*
mutation RemovePaymentCredentialMutation(
  $input: RemovePaymentCredentialInput!
) {
  removePaymentCredential: remove_payment_credential(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemovePaymentCredentialInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "removePaymentCredential",
    "name": "remove_payment_credential",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PaymentCredential",
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
    "name": "RemovePaymentCredentialMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RemovePaymentCredentialMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RemovePaymentCredentialMutation",
    "id": null,
    "text": "mutation RemovePaymentCredentialMutation(\n  $input: RemovePaymentCredentialInput!\n) {\n  removePaymentCredential: remove_payment_credential(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '23cc4e8389c96dcaac3de253b931d4e8';
export default node;
