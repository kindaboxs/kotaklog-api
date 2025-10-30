/**
 * Node modules
 */
import { createFactory } from 'hono/factory';

/**
 * Custom modules
 */
import { db } from '@/lib/db';

/**
 * Types
 */
import type { AppBindings } from '@/types/app-bindings';

export default createFactory<AppBindings>({
  defaultAppOptions: {
    strict: false,
  },

  initApp: app => {
    app.use(async (c, next) => {
      c.set('db', db);

      await next();
    });
  },
});
