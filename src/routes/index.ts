/**
 * Custom modules
 */
import factory from '@/lib/factory';

const indexRoute = factory.createApp().basePath('/');

indexRoute.get('/', c => {
  return c.text('Hello Hono!');
});

export default indexRoute;
