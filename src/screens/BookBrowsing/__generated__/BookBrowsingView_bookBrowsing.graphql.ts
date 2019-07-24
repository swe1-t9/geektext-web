/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type BookBrowsingView_bookBrowsing$ref = any;
export type BookBrowsingView_bookBrowsing = {
    readonly sortedBooks: ReadonlyArray<{
        readonly title: string;
    }>;
    readonly " $refType": BookBrowsingView_bookBrowsing$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "BookBrowsingView_bookBrowsing",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "input",
      "type": "SortedBooksInput!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "sortedBooks",
      "name": "sorted_books",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "input",
          "variableName": "input"
        }
      ],
      "concreteType": "Book",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '81b331971ad48a3dcf8ad0ac5cbc82ea';
export default node;
