/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type BookDetailsView_bookDetails$ref = any;
export type BookDetailsView_bookDetails = {
    readonly id: string;
    readonly author_id: string;
    readonly title: string;
    readonly isbn: string;
    readonly genre: string;
    readonly publish_year: number;
    readonly price: number;
    readonly " $refType": BookDetailsView_bookDetails$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "BookDetailsView_bookDetails",
  "type": "Book",
  "metadata": null,
  "argumentDefinitions": [],
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
      "alias": null,
      "name": "author_id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isbn",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "genre",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "publish_year",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "price",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'f2f7df3f6f668df67288f1c8ab043e8c';
export default node;
