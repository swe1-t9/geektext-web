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
    readonly description: string;
    readonly cover: any;
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cover",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'e754cd48bcc449fc11b1624fda28c21f';
export default node;
