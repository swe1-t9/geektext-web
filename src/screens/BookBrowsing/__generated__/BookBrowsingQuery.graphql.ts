/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type BookBrowsingView_bookBrowsing$ref = any;
export type SortedBooksInput = {
    readonly field_to_sort_by: string;
    readonly sort_direction: string;
};
export type BookBrowsingQueryVariables = {
    readonly input: SortedBooksInput;
};
export type BookBrowsingQueryResponse = {
    readonly " $fragmentRefs": BookBrowsingView_bookBrowsing$ref;
};
export type BookBrowsingQuery = {
    readonly response: BookBrowsingQueryResponse;
    readonly variables: BookBrowsingQueryVariables;
};



/*
query BookBrowsingQuery(
  $input: SortedBooksInput!
) {
  ...BookBrowsingView_bookBrowsing
}

fragment BookBrowsingView_bookBrowsing on Query {
  sortedBooks: sorted_books(input: $input) {
    title
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SortedBooksInput!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BookBrowsingQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "BookBrowsingView_bookBrowsing",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookBrowsingQuery",
    "argumentDefinitions": (v0/*: any*/),
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BookBrowsingQuery",
    "id": null,
    "text": "query BookBrowsingQuery(\n  $input: SortedBooksInput!\n) {\n  ...BookBrowsingView_bookBrowsing\n}\n\nfragment BookBrowsingView_bookBrowsing on Query {\n  sortedBooks: sorted_books(input: $input) {\n    title\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2cb07b884d50be31f79831a529ebe89a';
export default node;
