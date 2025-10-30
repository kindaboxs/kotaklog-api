/**
 * Node modules
 */
import { serve } from '@hono/node-server';

/**
 * Custom modules
 */
import app from '@/app';
import { env } from '@/configs/env';

/**
 * Middlewares
 */
import { logger } from '@/middlewares/logger';

const port = env.PORT;

serve(
  {
    fetch: app.fetch,
    port,
  },
  info => {
    logger.info(`Server is running on http://localhost:${info.port}`);
  }
);
