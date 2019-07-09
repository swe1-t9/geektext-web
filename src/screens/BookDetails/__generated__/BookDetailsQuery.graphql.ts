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
  }
}

fragment BookDetailsView_bookDetails on Book {
  author_id
  title
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BookDetailsQuery",
    "id": null,
    "text": "query BookDetailsQuery(\n  $input: BookDetailsInput!\n) {\n  bookDetails: book_details(input: $input) {\n    ...BookDetailsView_bookDetails\n  }\n}\n\nfragment BookDetailsView_bookDetails on Book {\n  author_id\n  title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd4ce50133705c9edacf0a92fccae0615';
export default node;
