import {client} from './client';

export const getConfig = async () => await client.get('/v1/config');
