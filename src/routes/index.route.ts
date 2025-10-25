/**
 * Node modules
 */
import { StatusCodes } from 'http-status-codes';

/**
 * Custom modules
 */
import factory from '@/lib/factory';

const indexRoute = factory.createApp().basePath('/');

indexRoute.get('/', c => {
  return c.json(
    {
      success: true,
      message: 'Kotaklog API is running',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    },
    StatusCodes.OK
  );
});

export default indexRoute;
