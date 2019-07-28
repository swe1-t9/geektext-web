/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type BookView_book$ref = any;
export type BookBrowsingView_bookBrowsing$ref = any;
export type BookBrowsingView_bookBrowsing = {
    readonly sortedBooks: ReadonlyArray<{
        readonly " $fragmentRefs": BookView_book$ref;
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
          "name": "BookView_book",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '7a43941bee70d2da043e6f1f721de603';
export default node;
