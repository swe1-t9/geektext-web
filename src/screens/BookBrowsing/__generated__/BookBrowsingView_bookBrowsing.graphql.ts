/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type BookView_book$ref = any;
export type BookBrowsingView_bookBrowsing$ref = any;
export type BookBrowsingView_bookBrowsing = {
    readonly sortedBooks: ReadonlyArray<{
        readonly title: string;
        readonly author: {
            readonly firstName: string;
        };
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
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "author",
          "storageKey": null,
          "args": null,
          "concreteType": "Author",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": "firstName",
              "name": "first_name",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "BookView_book",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = 'd80fdd67f82ec0c731a407a0fe3818eb';
export default node;
