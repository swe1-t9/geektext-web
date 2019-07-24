/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ShoppingCartView_user$ref = any;
export type ShoppingCartView_user = {
    readonly shoppingCart: {
        readonly items: ReadonlyArray<{
            readonly id: string;
            readonly book: {
                readonly title: string;
                readonly price: number;
                readonly cover: any;
            };
            readonly amount: number;
        }>;
    };
    readonly savedCart: {
        readonly items: ReadonlyArray<{
            readonly id: string;
            readonly book: {
                readonly title: string;
                readonly price: number;
                readonly cover: any;
            };
            readonly amount: number;
        }>;
    };
    readonly " $refType": ShoppingCartView_user$ref;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
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
      }
    ]
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "amount",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "ShoppingCartView_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
          "selections": (v0/*: any*/)
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "savedCart",
      "name": "saved_cart",
      "storageKey": null,
      "args": null,
      "concreteType": "SavedCart",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "items",
          "storageKey": null,
          "args": null,
          "concreteType": "SavedCartItem",
          "plural": true,
          "selections": (v0/*: any*/)
        }
      ]
    }
  ]
};
})();
(node as any).hash = 'b898f88befb660d0c56d5c595b95ffc3';
export default node;
