import { execRx } from '@onivoro/server-process';

export const queryProcessFactory = (hostAddress: string, indexName: string, query: any) => {
  return execRx(`curl -X POST -k -s \\
  ${hostAddress}/${indexName}/_search \\
  -H 'cache-control: no-cache' \\
  -H 'content-type: application/json' \\
  -d '${JSON.stringify({query}, null, 2)}'`)
};

