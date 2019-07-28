/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AddPaymentCredentialInput = {
    readonly card_association: string;
    readonly last_four_digits: number;
    readonly stripe_token: string;
};
export type AddPaymentCredentialMutationVariables = {
    readonly input: AddPaymentCredentialInput;
};
export type AddPaymentCredentialMutationResponse = {
    readonly addPaymentCredential: {
        readonly id: string;
    };
};
export type AddPaymentCredentialMutation = {
    readonly response: AddPaymentCredentialMutationResponse;
    readonly variables: AddPaymentCredentialMutationVariables;
};



/*
mutation AddPaymentCredentialMutation(
  $input: AddPaymentCredentialInput!
) {
  addPaymentCredential: add_payment_credential(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddPaymentCredentialInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "addPaymentCredential",
    "name": "add_payment_credential",
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
    "name": "AddPaymentCredentialMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddPaymentCredentialMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddPaymentCredentialMutation",
    "id": null,
    "text": "mutation AddPaymentCredentialMutation(\n  $input: AddPaymentCredentialInput!\n) {\n  addPaymentCredential: add_payment_credential(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '19a1cc13b675ed360f3f8b546504389d';
export default node;
