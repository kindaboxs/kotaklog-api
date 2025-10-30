/**
 * Node modules
 */
import { StatusCodes } from 'http-status-codes';

/**
 * Custom modules
 */
import { env } from '@/configs/env';

/**
 * Types
 */
import type { ErrorHandler } from 'hono';
import type { ContentfulStatusCode } from 'hono/utils/http-status';
import type { ErrorResponse } from '@/types/response';

const onError: ErrorHandler = (err, c) => {
  const currentStatus = 'status' in err ? err.status : c.newResponse(null).status;

  const statusCode =
    currentStatus !== StatusCodes.OK
      ? (currentStatus as ContentfulStatusCode)
      : StatusCodes.INTERNAL_SERVER_ERROR;

  return c.json<ErrorResponse>(
    {
      success: false,
      message: err.message,
      details: {
        code: statusCode,
        message: err.message,
        url: c.req.url,
        path: c.req.path,
        method: c.req.method,
        timestamp: new Date().toISOString(),
      },
      stack: env.NODE_ENV === 'production' ? undefined : err.stack,
    },
    statusCode
  );
};

export default onError;
