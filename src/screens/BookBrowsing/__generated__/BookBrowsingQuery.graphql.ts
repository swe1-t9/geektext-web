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
    ...BookView_Book
    id
  }
}

fragment BookView_Book on Book {
  id
  author {
    id
    first_name
    last_name
  }
  title
  isbn
  genre
  publish_year
  price
  description
  cover
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
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
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
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "Author",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "first_name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "last_name",
                "args": null,
                "storageKey": null
              }
            ]
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BookBrowsingQuery",
    "id": null,
    "text": "query BookBrowsingQuery(\n  $input: SortedBooksInput!\n) {\n  ...BookBrowsingView_bookBrowsing\n}\n\nfragment BookBrowsingView_bookBrowsing on Query {\n  sortedBooks: sorted_books(input: $input) {\n    ...BookView_Book\n    id\n  }\n}\n\nfragment BookView_Book on Book {\n  id\n  author {\n    id\n    first_name\n    last_name\n  }\n  title\n  isbn\n  genre\n  publish_year\n  price\n  description\n  cover\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2cb07b884d50be31f79831a529ebe89a';
export default node;
