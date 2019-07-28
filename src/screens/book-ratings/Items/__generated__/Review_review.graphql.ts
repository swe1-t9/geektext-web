/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Review_review$ref = any;
export type Review_review = {
    readonly title: string;
    readonly reviewer: {
        readonly first_name: string;
    };
    readonly body: string;
    readonly rating: number;
    readonly is_anonymous: boolean;
    readonly " $refType": Review_review$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Review_review",
  "type": "Review",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "reviewer",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "first_name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "body",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rating",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_anonymous",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'f2fb25e42f824affc953b7c57fc0f16c';
export default node;
