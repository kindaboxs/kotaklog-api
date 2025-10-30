/**
 * Types
 */
import type { PinoLogger } from 'hono-pino';
import type { PrismaClient } from '@/generated/prisma/client';

export interface AppBindings {
  Variables: {
    logger: PinoLogger;
    db: PrismaClient;
  };
}
