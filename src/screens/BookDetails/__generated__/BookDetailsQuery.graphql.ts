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
  title
  author {
    id
    first_name
    last_name
    bio
  }
  isbn
  genre
  publish_year
  price
  description
  cover
  ...CommentComponent_comments
}

fragment CommentComponent_comments on Book {
  reviews {
    ...Review_review
    id
  }
}

fragment Review_review on Review {
  title
  reviewer {
    first_name
    id
  }
  body
  rating
  is_anonymous
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
};
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
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "Author",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "last_name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "bio",
                "args": null,
                "storageKey": null
              }
            ]
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "reviews",
            "storageKey": null,
            "args": null,
            "concreteType": "Review",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "reviewer",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v2/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "body",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "rating",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "is_anonymous",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BookDetailsQuery",
    "id": null,
    "text": "query BookDetailsQuery(\n  $input: BookDetailsInput!\n) {\n  bookDetails: book_details(input: $input) {\n    ...BookDetailsView_bookDetails\n    id\n  }\n}\n\nfragment BookDetailsView_bookDetails on Book {\n  id\n  title\n  author {\n    id\n    first_name\n    last_name\n    bio\n  }\n  isbn\n  genre\n  publish_year\n  price\n  description\n  cover\n  ...CommentComponent_comments\n}\n\nfragment CommentComponent_comments on Book {\n  reviews {\n    ...Review_review\n    id\n  }\n}\n\nfragment Review_review on Review {\n  title\n  reviewer {\n    first_name\n    id\n  }\n  body\n  rating\n  is_anonymous\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd4ce50133705c9edacf0a92fccae0615';
export default node;
