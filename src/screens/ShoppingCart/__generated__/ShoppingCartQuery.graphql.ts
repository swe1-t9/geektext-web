/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type ShoppingCartView_user$ref = any;
export type ShoppingCartQueryVariables = {};
export type ShoppingCartQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": ShoppingCartView_user$ref;
    };
};
export type ShoppingCartQuery = {
    readonly response: ShoppingCartQueryResponse;
    readonly variables: ShoppingCartQueryVariables;
};



/*
query ShoppingCartQuery {
  viewer {
    ...ShoppingCartView_user
    id
  }
}

fragment ShoppingCartView_user on User {
  shoppingCart: shopping_cart {
    items {
      book {
        title
        price
        cover
        id
      }
      amount
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "ShoppingCartQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ShoppingCartView_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ShoppingCartQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "shoppingCart",
            "name": "shopping_cart",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingCart",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "items",
                "storageKey": null,
                "args": null,
                "concreteType": "ShoppingCartItem",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "book",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Book",
                    "plural": false,
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
                        "name": "price",
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
                      (v0/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "amount",
                    "args": null,
                    "storageKey": null
                  },
                  (v0/*: any*/)
                ]
              },
              (v0/*: any*/)
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ShoppingCartQuery",
    "id": null,
    "text": "query ShoppingCartQuery {\n  viewer {\n    ...ShoppingCartView_user\n    id\n  }\n}\n\nfragment ShoppingCartView_user on User {\n  shoppingCart: shopping_cart {\n    items {\n      book {\n        title\n        price\n        cover\n        id\n      }\n      amount\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '5a3814d80afa08725ef990fd473fc614';
export default node;
