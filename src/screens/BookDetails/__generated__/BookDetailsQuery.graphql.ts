/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type BookDetailsView_bookDetails$ref = any;
export type BookDetailsInput = {
    readonly id: string;
};
export type BookDetailsQueryVariables = {
    readonly input: BookDetailsInput;
};
export type BookDetailsQueryResponse = {
    readonly bookDetails: {
        readonly " $fragmentRefs": BookDetailsView_bookDetails$ref;
    };
};
export type BookDetailsQuery = {
    readonly response: BookDetailsQueryResponse;
    readonly variables: BookDetailsQueryVariables;
};



/*
query BookDetailsQuery(
  $input: BookDetailsInput!
) {
  bookDetails: book_details(input: $input) {
    ...BookDetailsView_bookDetails
    id
  }
}

fragment BookDetailsView_bookDetails on Book {
  id
  author_id
  title
  isbn
  genre
  publish_year
  price
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "BookDetailsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BookDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "bookDetails",
        "name": "book_details",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Book",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "BookDetailsView_bookDetails",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "bookDetails",
        "name": "book_details",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Book",
        "plural": false,
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BookDetailsQuery",
    "id": null,
    "text": "query BookDetailsQuery(\n  $input: BookDetailsInput!\n) {\n  bookDetails: book_details(input: $input) {\n    ...BookDetailsView_bookDetails\n    id\n  }\n}\n\nfragment BookDetailsView_bookDetails on Book {\n  id\n  author_id\n  title\n  isbn\n  genre\n  publish_year\n  price\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd4ce50133705c9edacf0a92fccae0615';
export default node;
