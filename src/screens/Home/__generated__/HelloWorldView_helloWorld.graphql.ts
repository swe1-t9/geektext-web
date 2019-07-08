/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type HelloWorldView_helloWorld$ref = any;
export type HelloWorldView_helloWorld = {
    readonly helloWorld: string;
    readonly " $refType": HelloWorldView_helloWorld$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "HelloWorldView_helloWorld",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "helloWorld",
      "name": "hello_world",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'a1e008d5bf3dd67ba96e5e946fb89abb';
export default node;
