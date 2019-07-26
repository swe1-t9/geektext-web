/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type PaymentCredentialsView_paymentCredentials$ref = any;
export type PaymentCredentialsView_paymentCredentials = {
    readonly paymentCredentials: ReadonlyArray<{
        readonly id: string;
        readonly lastFourDigits: number;
        readonly cardAssociation: string;
    }>;
    readonly " $refType": PaymentCredentialsView_paymentCredentials$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "PaymentCredentialsView_paymentCredentials",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "paymentCredentials",
      "name": "payment_credentials",
      "storageKey": null,
      "args": null,
      "concreteType": "PaymentCredential",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": "lastFourDigits",
          "name": "last_four_digits",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": "cardAssociation",
          "name": "card_association",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'b59aac07c6ebbef4559cc4b2cbf0c2ba';
export default node;
