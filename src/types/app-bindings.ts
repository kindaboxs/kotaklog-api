/**
 * Types
 */
import type { PinoLogger } from 'hono-pino';
import type { PrismaClient } from '@/generated/prisma/client';
import type { auth } from '@/lib/auth';

export interface AppBindings {
  Variables: {
    logger: PinoLogger;
    db: PrismaClient;
    session: typeof auth.$Infer.Session.session | null;
    user: typeof auth.$Infer.Session.user | null;
  };
}
