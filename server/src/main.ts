import 'dotenv/config';

import { api } from '@/application/api';
import { logger } from '@/application/logger';

const port = process.env.PORT ?? 8765;

api.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
