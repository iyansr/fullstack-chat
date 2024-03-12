import axios from 'axios';

import { config } from '@/modules/config';

export const api = axios.create({
  baseURL: config.API_URL,
});
