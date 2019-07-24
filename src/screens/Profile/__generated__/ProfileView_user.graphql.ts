/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ProfileView_user$ref = any;
export type ProfileView_user = {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: any;
    readonly " $refType": ProfileView_user$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ProfileView_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "firstName",
      "name": "first_name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "lastName",
      "name": "last_name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'ea306c13f922e425779a2d5438f492e4';
export default node;
