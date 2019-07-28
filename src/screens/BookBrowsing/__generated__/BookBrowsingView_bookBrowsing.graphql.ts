/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type BookView_Book$ref = any;
export type BookBrowsingView_bookBrowsing$ref = any;
export type BookBrowsingView_bookBrowsing = {
    readonly sortedBooks: ReadonlyArray<{
        readonly " $fragmentRefs": BookView_Book$ref;
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
          "kind": "FragmentSpread",
          "name": "BookView_Book",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '53f450f18ef328b25ea4d9812c2d9d63';
export default node;
