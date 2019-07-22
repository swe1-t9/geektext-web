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

import { getToken } from '../shared/token';
import { isLoggedIn } from '../shared/auth';

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
  const headers = isLoggedIn()
    ? new Headers({
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json'
      })
    : new Headers({
        'Content-Type': 'application/json'
      });
  const response = await fetch(
    nullthrows(
      'http://localhost:3000/graphql',
      'SERVER_URL not found in the environment'
    ),
    {
      method: 'POST',
      headers,
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
