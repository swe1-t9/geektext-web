/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type BookDetailsView_bookDetails$ref = any;
export type BookDetailsView_bookDetails = {
    readonly author_id: string;
    readonly title: string;
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
    }
  ]
};
(node as any).hash = 'bf005bed7e5cd24774d8d78a87ff0453';
export default node;
