/**
 * Custom modules
 */
import createApp from '@/lib/create-app';

/**
 * Routes
 */
import indexRoute from '@/routes/index.route';
import authRoute from '@/routes/auth.route';

const app = createApp();

const routes = [indexRoute, authRoute] as const;

routes.forEach(route => {
  app.basePath('/api').route('/', route);
});

export default app;
