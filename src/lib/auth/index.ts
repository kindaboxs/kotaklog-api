/**
 * Node modules
 */
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { username, admin, openAPI } from 'better-auth/plugins';
import { betterAuth } from 'better-auth';

/**
 * Custom modules
 */
import { db } from '@/lib/db';

/**
 * Types
 */
import type { BetterAuthOptions } from 'better-auth';
import { env } from '@/configs/env';

export const auth = betterAuth<BetterAuthOptions>({
  appName: 'kotaklog-api',
  advanced: {
    defaultCookieAttributes: {
      sameSite: 'None',
      secure: true,
      httpOnly: true,
    },
    database: {
      generateId: false,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(db, {
    provider: 'postgresql',
  }),
  plugins: [openAPI(), admin(), username()],
  trustedOrigins: env.CORS_ORIGIN,
});
