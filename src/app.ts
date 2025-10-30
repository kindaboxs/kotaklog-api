/**
 * Custom modules
 */
import createApp from '@/lib/create-app';

/**
 * Routes
 */
import index from '@/routes/index';

const app = createApp();

const routes = [index] as const;

routes.forEach(route => {
  app.basePath('/api').route('/', route);
});

export type AppType = (typeof routes)[number];

export default app;
