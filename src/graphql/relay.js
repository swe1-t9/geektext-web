// @flow strict-local

import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';

const SERVER_URL = 'http://PLACEHOLDER-TEXT.com';
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
  const response = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  });
  const json = await response.json();
  isQuery && json != null && cache.set(queryID, variables, json);
  isMutation && cache.clear();
  return json;
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export { environment };
