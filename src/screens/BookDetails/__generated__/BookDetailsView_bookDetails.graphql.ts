/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type CommentComponent_comments$ref = any;
export type BookDetailsView_bookDetails$ref = any;
export type BookDetailsView_bookDetails = {
    readonly id: string;
    readonly title: string;
    readonly author: {
        readonly id: string;
        readonly first_name: string;
        readonly last_name: string;
        readonly bio: string;
    };
    readonly isbn: string;
    readonly genre: string;
    readonly publish_year: number;
    readonly price: number;
    readonly description: string;
    readonly cover: any;
    readonly " $fragmentRefs": CommentComponent_comments$ref;
    readonly " $refType": BookDetailsView_bookDetails$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "BookDetailsView_bookDetails",
  "type": "Book",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "author",
      "storageKey": null,
      "args": null,
      "concreteType": "Author",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
      "kind": "FragmentSpread",
      "name": "CommentComponent_comments",
      "args": null
    }
  ]
};
})();
(node as any).hash = '29ebfb683f183a1b10075353acb7b24d';
export default node;
