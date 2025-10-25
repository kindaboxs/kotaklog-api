/**
 * Node modules
 */
import { requestId } from 'hono/request-id';

/**
 * Custom modules
 */
import factory from '@/lib/factory';

/**
 * Middlewares
 */
import notFound from '@/middlewares/not-found';
import onError from '@/middlewares/on-error';
import appLogger from '@/middlewares/logger';

export default function createApp() {
  const app = factory.createApp();

  app.use(requestId());
  app.use(appLogger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
