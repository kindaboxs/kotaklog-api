/**
 * Node modules
 */
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { username, openAPI, anonymous, admin } from 'better-auth/plugins';

/**
 * Custom modules
 */
import { db } from '@/lib/db';
import { env } from '@/configs/env';

/**
 * Types
 */
import type { BetterAuthOptions } from 'better-auth';

export const auth = betterAuth<BetterAuthOptions>({
  appName: 'kotaklog-api',
  baseURL: env.BETTER_AUTH_URL,
  database: prismaAdapter(db, {
    provider: 'postgresql',
  }),
  advanced: {
    database: {
      generateId: false,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  logger: {
    level: env.LOG_LEVEL,
    disabled: env.NODE_ENV === 'production',
  },
  plugins: [admin(), anonymous(), openAPI(), username()],
  secret: env.BETTER_AUTH_SECRET,
  trustedOrigins: env.CORS_ORIGINS,
});
