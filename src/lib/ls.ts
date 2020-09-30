import { execRx } from '@onivoro/server-process';

export const ls = (hostAddress: string) => execRx(`curl -X GET -k ${hostAddress}/_cat/indices`);

