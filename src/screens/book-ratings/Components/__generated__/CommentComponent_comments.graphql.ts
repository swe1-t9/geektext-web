/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type Review_review$ref = any;
export type CommentComponent_comments$ref = any;
export type CommentComponent_comments = {
    readonly reviews: ReadonlyArray<{
        readonly " $fragmentRefs": Review_review$ref;
    }>;
    readonly " $refType": CommentComponent_comments$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CommentComponent_comments",
  "type": "Book",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "reviews",
      "storageKey": null,
      "args": null,
      "concreteType": "Review",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Review_review",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '9a0518bc62f32fcd38fa9ad1809f9402';
export default node;
