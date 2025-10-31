/**
 * Custom modules
 */
import factory from '@/lib/factory';
import { auth } from '@/lib/auth';

const authRoute = factory.createApp().basePath('/auth');

authRoute.on(['POST', 'GET'], '/*', c => {
  return auth.handler(c.req.raw);
});

export default authRoute;
