/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateReviewInput = {
    readonly body: string;
    readonly book_id: string;
    readonly rating: number;
    readonly title: string;
};
export type CreateReviewMutationVariables = {
    readonly input: CreateReviewInput;
};
export type CreateReviewMutationResponse = {
    readonly create_review: {
        readonly id: string;
        readonly reviewer: {
            readonly id: string;
            readonly first_name: string;
        };
        readonly book: {
            readonly id: string;
            readonly title: string;
        };
        readonly title: string;
        readonly body: string;
        readonly rating: number;
        readonly is_anonymous: boolean;
    };
};
export type CreateReviewMutation = {
    readonly response: CreateReviewMutationResponse;
    readonly variables: CreateReviewMutationVariables;
};



/*
mutation CreateReviewMutation(
  $input: CreateReviewInput!
) {
  create_review(input: $input) {
    id
    reviewer {
      id
      first_name
    }
    book {
      id
      title
    }
    title
    body
    rating
    is_anonymous
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateReviewInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "create_review",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Review",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "reviewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "first_name",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "book",
        "storageKey": null,
        "args": null,
        "concreteType": "Book",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ]
      },
      (v2/*: any*/),
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateReviewMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateReviewMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateReviewMutation",
    "id": null,
    "text": "mutation CreateReviewMutation(\n  $input: CreateReviewInput!\n) {\n  create_review(input: $input) {\n    id\n    reviewer {\n      id\n      first_name\n    }\n    book {\n      id\n      title\n    }\n    title\n    body\n    rating\n    is_anonymous\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '5ff3b740d4abd69a7ce3c3e55c753ef5';
export default node;
