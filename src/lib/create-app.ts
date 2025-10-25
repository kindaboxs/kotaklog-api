/**
 * Node modules
 */
import { requestId } from 'hono/request-id';
import { cors } from 'hono/cors';
import { prettyJSON } from 'hono/pretty-json';

/**
 * Custom modules
 */
import factory from '@/lib/factory';
import { env } from '@/configs/env';

/**
 * Middlewares
 */
import notFound from '@/middlewares/not-found';
import onError from '@/middlewares/on-error';
import appLogger from '@/middlewares/logger';
import serveEmojiFavicon from '@/middlewares/serve-emoji-favicon';

export default function createApp() {
  const app = factory.createApp();

  app.use(requestId());
  app.use(appLogger());
  app.use(prettyJSON());
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      allowHeaders: ['Content-Type', 'Authorization'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      exposeHeaders: ['Content-Length'],
      maxAge: 600,
      credentials: true,
    })
  );
  app.use(serveEmojiFavicon('🚀'));

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
