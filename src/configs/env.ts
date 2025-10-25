/**
 * Node modules
 */
import 'dotenv/config';
import process from 'node:process';
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
    PORT: z.coerce.number(),
    LOG_LEVEL: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal']),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
