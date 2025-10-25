/**
 * Node modules
 */
import { serve } from '@hono/node-server';

/**
 * Custom modules
 */
import app from '@/app';
import { env } from '@/configs/env';

const port = env.PORT;

serve(
  {
    fetch: app.fetch,
    port,
  },
  info => {
    // eslint-disable-next-line no-undef
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
