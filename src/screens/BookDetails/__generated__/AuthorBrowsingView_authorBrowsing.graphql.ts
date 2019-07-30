/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type BookView_book$ref = any;
export type AuthorBrowsingView_authorBrowsing$ref = any;
export type AuthorBrowsingView_authorBrowsing = {
    readonly sortedBooks: ReadonlyArray<{
        readonly author: {
            readonly id: string;
        };
        readonly " $fragmentRefs": BookView_book$ref;
    }>;
    readonly " $refType": AuthorBrowsingView_authorBrowsing$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "AuthorBrowsingView_authorBrowsing",
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
              "alias": null,
              "name": "id",
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
(node as any).hash = '1d69413a6ae6affc547eee3a1c9e1281';
export default node;
