/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type ProfileView_user$ref = any;
export type ProfileQueryVariables = {};
export type ProfileQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": ProfileView_user$ref;
    };
};
export type ProfileQuery = {
    readonly response: ProfileQueryResponse;
    readonly variables: ProfileQueryVariables;
};



/*
query ProfileQuery {
  viewer {
    ...ProfileView_user
    id
  }
}

fragment ProfileView_user on User {
  firstName: first_name
  lastName: last_name
  email
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProfileQuery",
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
            "name": "ProfileView_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileQuery",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProfileQuery",
    "id": null,
    "text": "query ProfileQuery {\n  viewer {\n    ...ProfileView_user\n    id\n  }\n}\n\nfragment ProfileView_user on User {\n  firstName: first_name\n  lastName: last_name\n  email\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '4b7e8ad111990dc7914e137d8b1dac5f';
export default node;
