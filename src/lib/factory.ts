/**
 * Node modules
 */
import { createFactory } from 'hono/factory';

/**
 * Custom modules
 */
import { db } from '@/lib/db';
import { auth } from '@/lib/auth';

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

    app.use(async (c, next) => {
      const session = await auth.api.getSession({ headers: c.req.raw.headers });

      if (!session) {
        c.set('user', null);
        c.set('session', null);
        await next();
        return;
      }

      c.set('user', session.user);
      c.set('session', session.session);
      await next();
    });
  },
});
