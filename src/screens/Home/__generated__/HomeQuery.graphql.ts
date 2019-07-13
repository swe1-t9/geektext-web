/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type HelloWorldView_helloWorld$ref = any;
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly " $fragmentRefs": HelloWorldView_helloWorld$ref;
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery {
  ...HelloWorldView_helloWorld
}

fragment HelloWorldView_helloWorld on Query {
  helloWorld: hello_world
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "HelloWorldView_helloWorld",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeQuery",
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
  },
  "params": {
    "operationKind": "query",
    "name": "HomeQuery",
    "id": null,
    "text": "query HomeQuery {\n  ...HelloWorldView_helloWorld\n}\n\nfragment HelloWorldView_helloWorld on Query {\n  helloWorld: hello_world\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '7f7b984d633d66196af59af5e792d291';
export default node;
