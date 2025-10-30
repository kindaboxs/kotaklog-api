import 'dotenv/config';
import process from 'node:process';
import { createEnv } from '@t3-oss/env-core';
import * as z from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
    PORT: z.coerce.number().int(),
    LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']),
    CORS_ORIGINS: z.string().transform(value =>
      value
        .split(',')
        .map(origin => origin.trim())
        .filter(Boolean)
    ),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
