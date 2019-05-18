// @flow strict-local

import nullthrows from 'nullthrows';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';

const { SERVER_URL } = process.env;

const oneMinute = 60 * 1000;
const cache = new RelayQueryResponseCache({ size: 250, ttl: oneMinute });

async function fetchQuery(operation, variables, cacheConfig) {
  const queryID = operation.text;
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const fromCache = cache.get(queryID, variables);
  if (isQuery && fromCache !== null) {
    return fromCache;
  }
  const response = await fetch(
    nullthrows(SERVER_URL, 'SERVER_URL not found in the environment'),
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
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export { environment };
