/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ShoppingCartView_user$ref = any;
export type ShoppingCartView_user = {
    readonly shoppingCart: {
        readonly items: ReadonlyArray<{
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



const node: ReaderFragment = {
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
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '6079e062c3ad44a9911ef195993d68eb';
export default node;
