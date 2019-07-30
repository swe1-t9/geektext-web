/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type AuthorBrowsingView_authorBrowsing$ref = any;
export type SortedBooksInput = {
    readonly field_to_sort_by: string;
    readonly sort_direction: string;
};
export type AuthorBrowsingQueryVariables = {
    readonly input: SortedBooksInput;
};
export type AuthorBrowsingQueryResponse = {
    readonly " $fragmentRefs": AuthorBrowsingView_authorBrowsing$ref;
};
export type AuthorBrowsingQuery = {
    readonly response: AuthorBrowsingQueryResponse;
    readonly variables: AuthorBrowsingQueryVariables;
};



/*
query AuthorBrowsingQuery(
  $input: SortedBooksInput!
) {
  ...AuthorBrowsingView_authorBrowsing
}

fragment AuthorBrowsingView_authorBrowsing on Query {
  sortedBooks: sorted_books(input: $input) {
    author {
      id
    }
    ...BookView_book
    id
  }
}

fragment BookView_book on Book {
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
    "name": "AuthorBrowsingQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AuthorBrowsingView_authorBrowsing",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthorBrowsingQuery",
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
          (v1/*: any*/),
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
    "name": "AuthorBrowsingQuery",
    "id": null,
    "text": "query AuthorBrowsingQuery(\n  $input: SortedBooksInput!\n) {\n  ...AuthorBrowsingView_authorBrowsing\n}\n\nfragment AuthorBrowsingView_authorBrowsing on Query {\n  sortedBooks: sorted_books(input: $input) {\n    author {\n      id\n    }\n    ...BookView_book\n    id\n  }\n}\n\nfragment BookView_book on Book {\n  id\n  author {\n    id\n    first_name\n    last_name\n  }\n  title\n  isbn\n  genre\n  publish_year\n  price\n  description\n  cover\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7a5efe1522f5ac17be3380393a33e9d3';
export default node;
