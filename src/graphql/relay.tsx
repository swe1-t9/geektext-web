// @flow strict-local

import nullthrows from 'nullthrows';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  QueryResponseCache,
  FetchFunction
} from 'relay-runtime';

const { SERVER_URL } = process.env;

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });

const fetchQuery: FetchFunction = async (operation, variables) => {
  const queryID = nullthrows(operation.text);
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const fromCache = cache.get(queryID, variables);
  if (isQuery && fromCache !== null) {
    return fromCache;
  }
  const response = await fetch(
    nullthrows(
      'http://localhost:3000/graphql',
      'SERVER_URL not found in the environment'
    ),
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text,
        variables
      })
    }
  );
  const json = await response.json();
  if (isQuery && json != null) {
    cache.set(queryID, variables, json);
  } else if (isMutation) {
    cache.clear();
  }
  return json;
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export { environment };
