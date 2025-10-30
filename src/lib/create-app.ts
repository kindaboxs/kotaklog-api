/**
 * Node modules
 */
import { requestId } from 'hono/request-id';
import { prettyJSON } from 'hono/pretty-json';
import { cors } from 'hono/cors';

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

export default function createAp() {
  const app = factory.createApp();

  app.use(requestId());
  app.use(appLogger());
  app.use(prettyJSON());
  app.use(
    cors({
      origin: env.CORS_ORIGINS,
      allowHeaders: ['Content-Type', 'Authorization'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      exposeHeaders: ['Content-Length'],
      maxAge: 600,
      credentials: true,
    })
  );
  app.use(serveEmojiFavicon('🐱'));

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
