/**
 * Custom modules
 */
import factory from '@/lib/factory';

/**
 * Middlewares
 */
import notFound from '@/middlewares/not-found';
import onError from '@/middlewares/on-error';

export default function createAp() {
  const app = factory.createApp();

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
